const router = require("express").Router();
const { Post, User } = require("../../Model");
const path = require("path");
const { read } = require("fs");
const withAuth = require("../../utils/checkAuth");

router.post("/login", async (req, res) => {
  console.log(req.session);

  try {
    console.log("objectnnn");
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log(userData);
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrkkkect email or password, please try again" });
      return;
    }
    console.log("object2");

    const validPassword = userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    console.log("object");
    if (!req.session.loggedIn) {
      req.session.loggedIn = true;
      req.session.username = userData.name;
      req.session.email = userData.email;
    }
    res.json({ user: userData, message: "You are now logged in!" });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/login", async (req, res) => {
  console.log(req.session);
  console.log("looking up user");

  try {
    console.log("looking up user");

    if (req.session.loggedIn == true) {
      console.log("looking up user");
      const userData = await User.findOne({
        where: { email: req.session.email },
        attributes: { exclude: ["password"] },
      });
      console.log("checking user info exists ");
      if (userData) {
        console.log("responsds back with ", userData);
        res.json({ userData });
        return;
      }
    }
    res.status(404).json({ message: "err" });
  } catch (err) {
    console.log("error");
    res.status(404).json(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.loggedIn = true;
    req.session.username = newUser.name;
    req.session.email = newUser.email;
    console.log(req.session);

    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "user already found !" });
  }
});
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
