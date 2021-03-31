const router = require("express").Router();
const postRoutes = require("./post");
const userRoutes = require("./user");
// const projectRoutes = require("./projectRoutes");

router.use("/post", postRoutes);
router.use("/login", userRoutes);

module.exports = router;