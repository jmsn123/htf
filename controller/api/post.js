const router = require("express").Router();
const { Post } = require("../../Model");
const path = require("path");

router.get("/", (req, res) => {
    console.log("GET/Post");
    res.send("GET");
});
router.post("/", (req, res) => {
    console.log("POST/Post");
    res.send("POST");
});
module.exports = router;