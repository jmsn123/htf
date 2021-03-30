const path = require("path");
const express = require("express");
const session = require("express-session");

const routes = require("./controller");
// const routes = require("./controller/index.js"); // code works

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const firebase = require("./config/firebase");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));

const Session = {
    secret: "secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    // store: new SequelizeStore({
    //     db: sequelize,
    // }),
};

app.use(session(Session));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening on PORT: " + PORT));
});