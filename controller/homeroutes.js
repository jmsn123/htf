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

router.get("/", async(req, res) => {
    // initial get route this is for home page to display different post 
    const post = await Post.findAll();
    const postpk = await Post.findByPk(1)

    res.json({
        post,
        postpk
    })
})
module.exports = router;