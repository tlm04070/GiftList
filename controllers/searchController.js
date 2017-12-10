var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var gift = require("../models/gift.js");
var user = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  gift.all(function returnDataToController(data) {
    var hbsObject = {
      gifts: data
    };
    res.json(data);
    // console.log(hbsObject);
    // res.render("index", hbsObject);
  });
});

router.post("/gift", function(req, res) {
  // gift.create()
  var cols = "title, city_state, category, item_description, contact, img_link";
  var vals = req.body.vals;
  gift.create(cols, vals, function returnDataToController(result) {
    res.json({ result });
  });
});

router.get("/users", function(req, res) {
  user.all(function returnDataToController(data) {
    var hbsObject = {
      users: data
    };
    res.json(data);
  });
});

router.post("/user/new", function(req, res) {
  var cols = "user_name, phone, email, pass_word";
  var vals = req.body.vals;

  user.create(cols, vals, function returnDataToController(data) {
    res.json({ data });
  });
});
module.exports = router;
