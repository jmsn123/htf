const router = require("express").Router();
const { User } = require("../Model");
const path = require("path");

router.get("/", async(req, res) => {
<<<<<<< HEAD
    console.log("GET /login");
=======
    console.log("GET /login HOME ");
>>>>>>> fd6894a971b114b7d7240160063e6557299806b3
    console.log(path.join(__dirname, "../public/userlogin.html"));

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

router.get("/login", async(req, res) => {
    try {
<<<<<<< HEAD
        console.log("letty");
=======
        console.log("GET/LOGIN");
>>>>>>> fd6894a971b114b7d7240160063e6557299806b3
        // const userData = await User.findOne({ where: { email: req.body.email } });
        // if (!userData) {
        //     res
        //         .status(400)
        //         .json({ message: "Incorrect email or password, please try again" });
        //     return;
        // }
        // const validPassword = await userData.checkPassword(req.body.password);
        // if (!validPassword) {
        //     res
        //         .status(400)
        //         .json({ message: "Incorrect email or password, please try again" });
        //     return;
        // }
        // req.session.save(() => {
        //     req.session.user_id = userData.id;
        //     req.session.logged_in = true;
        //     res.json({ user: userData, message: "You are now logged in!" });
        // });
        res.sendFile(path.join(__dirname, "../public/userlogin.html"));
    } catch (err) {
        res.status(400).json(err);
    }
});

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