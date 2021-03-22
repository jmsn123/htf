const router = require("express").Router();
const { Post, User } = require("../../Model");
const path = require("path");

router.get("/", async(req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{
                model: User,

            }, ],
        });

        res.send(postData);
    } catch (error) {
        console.log(error);
    }
});
router.post("/", (req, res) => {
    console.log("POST/Post");
    res.send("POST");
});
module.exports = router;