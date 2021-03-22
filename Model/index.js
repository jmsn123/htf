const User = require("./User");
const Post = require("./Post");
User.hasMany(Post, {
    as: "post",
});
Post.belongsTo(User, {
    foreignKey: "user_id",
});

module.exports = { Post, User };