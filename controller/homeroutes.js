const router = require("express").Router();
// const Post = require("../Model/Post");
const path = require("path");
// const postData = require("../Model/postData");
const { Post, User } = require("../Model");
// /get session flag from firebase

router.get("/", async(req, res) => {
    console.log("GET /");
    try {
        // // Get all projects and JOIN with user data
        const postData = await Post.findAll({
            include: [{
                model: User,
            }, ],
        });
        console.log("hither");
        console.log(postData);

    } catch (err) {
        res.status(500).json(err);
    }
});
router.post("/login", async(req, res) => {
    try {

        const user = User.findByPk(req.body.id).then(data => console.log(data))
        return user
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get("/login", async(req, res) => {
    try {
        console.log("Login route hit");
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;