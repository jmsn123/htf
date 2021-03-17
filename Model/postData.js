const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class postData extends Model {}

postData.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    PostName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postContent: {
        type: DataTypes.STRING,
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    postAuthor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
        },
    },
}, {
    hooks: {
        // beforeCreate: async(newUserData) => {
        //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
        //     return newUserData;
        // },
        // beforeUpdate: async(updatedUserData) => {
        //     updatedUserData.password = await bcrypt.hash(
        //         updatedUserData.password,
        //         10
        //     );
        //     return updatedUserData;
        // },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "postData",
});

module.exports = postData;