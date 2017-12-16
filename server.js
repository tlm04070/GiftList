require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var orm = require("./config/orm.js");
var session = require("express-session");
var cloudinary = require("./public/assets/js/cloudinaryInfo");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3009;

// Requiring our models for syncing

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

//main route

var routes = require("./controllers/searchController");

app.use("/", routes);

app.listen(PORT);

// Sequelize Functionality
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
