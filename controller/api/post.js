const router = require("express").Router();
const { Post, User } = require("../../Model");
const path = require("path");

router.get("/", async(req, res) => {
    console.log("GET /");
    try {
        // // Get all projects and JOIN with user data
        const postData = await Post.findAll({
            include: [{
                model: User,
            }, ],
        });
        res.json(postData)
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get("/:id", async(req, res) => {
    console.log("GET /id");
    try {
        // // Get all projects and JOIN with user data
        const postData = await Post.findByPk(req.params.id, {
            include: [{
                model: User,
            }, ],
        });
        res.json(postData)
    } catch (err) {
        res.status(500).json(err);
    }
});
router.post("/", async(req, res) => {
    console.log("POST/POST")
    const newPost = await Post.create({
        postName: req.body.name,
        postContent: req.body.content,
        postAuthor: req.body.author
    })
    res.json(newPost)
});
router.post("/:id/update", async(req, res) => {

    try {
        console.log("we are in the update POST");
        const { id } = req.params
        const updatedPost = await Post.update({
            postName: req.body.name,
            postContent: req.body.content,
            postAuthor: req.body.author
        }, {
            where: {
                id
            }
        })
        res.json(updatedPost)
    } catch (error) {
        console.log(error);
    }
});
module.exports = router;