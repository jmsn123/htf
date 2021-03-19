const router = require("express").Router();
const { Post } = require("../api/post");
const path = require("path");

router.get("/", (req, res) => {
    console.log("Get/Post");
    res.send("GET");
});
router.post("/", (req, res) => {
    console.log("POST/Post");
    res.send("POST");
});
module.exports = router;