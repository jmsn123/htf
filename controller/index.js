const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

// Setup middleware for routes .use()
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;