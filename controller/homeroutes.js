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
        // const postData = await postData.findAll({
        //     include: [{
        //         model: User,
        //         attributes: ["name"],
        //     }, ],
        // });
        // // Serialize data so the template can read it
        // const post = projectData.map((posts) => posts.get({ plain: true }));
        // console.log("h");
        // // Pass serialized data and session flag into template
        // res.render("blog");
        console.log(path.join(__dirname, "../public/home.html"));
        res.sendFile(path.join(__dirname, "../public/home.html"));
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get("/post/:id", async(req, res) => {
    try {
        const postData = await postData.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ["name"],
            }, ],
        });

        const posts = post.get({ plain: true });

        res.render("project", {
            ...posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;