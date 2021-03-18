const User = require("./Users");
const Post = require("./Post");
Post.hasMany(Post, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});
module.exports = { Post };