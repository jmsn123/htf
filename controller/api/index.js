const router = require("express").Router();
const postRoutes = require("./post");
const userRoutes = require("./user");
const authRoutes = require("./auth");
// const projectRoutes = require("./projectRoutes");

router.use("/post", postRoutes);
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;