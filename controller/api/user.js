const router = require("express").Router();
const { User } = require("../../Model");
router.post("/", async(req, res) => {
    console.log("POST request body : ", req.body)

    try {

        // console.log(req.session.loggedIn)
        const newUser = await User.create({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        console.log(req.body)
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.username = newUser.name;
            req.session.email = newUser.email

            res.status(200).json(newUser);
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

})
router.post("/login", async(req, res) => {
    console.log("POST /login");

    try {
        // console.log(User.checkPassword())
        const user = await User.findOne({ where: { email: req.body.email } })
        if (!user) res.status(400).json({ message: "incorrect credentials " })
        console.log("we found user ")
        const password = user.checkPassword(req.body.password)
        console.log("password correct")
        if (!password) res.status(400).json({ message: "incorrect credentials " })
        req.session.save(() => {
            req.session.logged_in = true,
                req.session.username = user.name,
                req.session.email = user.email
            res.status(200).json({ user, message: "we logged in " })
        })

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;