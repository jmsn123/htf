const router = require("express").Router();
const postRoutes = require("./post");
// const projectRoutes = require("./projectRoutes");

router.use("/post", postRoutes);
// router.use("/projects", projectRoutes);

module.exports = router;