const router = require("express").Router();
// const Post = require("../Model/Post");
const path = require("path");
// const postData = require("../Model/postData");
const { Post, User } = require("../Model");
// /get session flag from firebase

// localhost:3001/

router.get("/", async(req, res) => {
    console.log("GET /");
    // initial get route this is for home page to display different post 
    try {

        res.sendFile(path.join(__dirname, "../public/home.html"));
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})



// localhost:3001/login/
router.get("/login", async(req, res) => {
    console.log("GET localhost:3001/login");
    try {
        // const userData = await User.create(req.body);
        // req.session.save(() => {
        //     req.session.user_id = userData.id;
        //     req.session.logged_in = true;
        //     res.status(200).json(userData);
        res.sendFile(path.join(__dirname, "../public/userlogin.html"));
    } catch (err) {
        res.status(400).json(err);
    }
});

// localhost:3001/logout
router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;