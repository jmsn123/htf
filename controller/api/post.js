const router = require("express").Router();
const { Post, User } = require("../../Model");
const path = require("path");

router.get("/", async(req, res) => {
    console.log("GET /api/post");
    try {
        // // Get all posts with user data
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
    console.log("GET /api/post/<id>");
    try {
        // Get post with id
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
    console.log("POST /api/post");
    try {
        const newPost = await Post.create({
            postName: req.body.name,
            postContent: req.body.content,
            postAuthor: req.body.author
        })
        res.json(newPost)

    } catch (error) {
        res.json(error).status(404)
    }
});

router.put("/:id", async(req, res) => {
    console.log("PUT /api/post/<id>")

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