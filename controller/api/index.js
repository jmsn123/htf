const router = require("express").Router();
const postRoutes = require("./post");
const authRoutes = require("./auth");
// const projectRoutes = require("./projectRoutes");

router.use("/post", postRoutes);
router.use("/auth", authRoutes);

module.exports = router;
