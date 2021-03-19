const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./homeRoutes");
const loginRoutes = require("./loginroutes");

router.use("/", homeRoutes);
router.use("/login", loginRoutes);
router.use("/api", apiRoutes);

module.exports = router;