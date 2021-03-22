const router = require("express").Router();
// const Post = require("../Model/Post");
const path = require("path");
// const postData = require("../Model/postData");
const { Post, User } = require("../Model");
// /get session flag from firebase

router.get("/", async(req, res) => {
    // initial get route this is for home page to display different post 
    const post = await Post.findAll();
    const postpk = await Post.findByPk(1)

    res.json({
        post,
        postpk
    })
})

router.post("/login", async(req, res) => {
    try {

        const user = User.findByPk(req.body.id).then(data => console.log(data))
        return user
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get("/login", async(req, res) => {
    console.log("Home Routes GET/Login");
    try {
        res.json("we made it ")
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;