const User = require("./Users");
const Post = require("./Post");
User.hasMany(Post, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
});
module.exports = { Post };