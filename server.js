var express = require("express");
var bodyParser = require("body-parser");
var orm = require("./config/orm.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

//main route
require("./routes/html-routes.js")(app);

orm.selectWhere("title", "city_state", "category", "item_description", "contact", "img_link", function(result){
  var data = result;
  console.log(data);
  console.log("Retrieve");
});



// Sequelize Functionality
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
