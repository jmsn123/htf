const User = require("./User");
const Post = require("./Post");
User.hasMany(Post, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});
Post.belongsTo(User, {
    foreignKey: "post_id",
});
module.exports = { Post, User };