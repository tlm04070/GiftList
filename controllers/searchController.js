var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var gift = require("../models/gift.js");
var user = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/post", function(req, res) {
  res.render("post");
});

router.get("/signup", function(req, res) {
  res.render("signup");
});

router.get("/list", function(req, res) {
  gift.all(function returnDataToController(data) {
    var info = { gifts: [] };

    for (var i = 0; i < data.length; i += 1) {
      // Get the current animal.
      var currentGift = data[i];

      // Check if this animal is a pet.

      // If not, push it into our data.anims array.
      info.gifts.push(currentGift);
    }

    console.log(info);
    res.render("list", info);
  });
});

router.get("/all", function(req, res) {
  gift.all(function returnDataToController(data) {
    var hbsObject = {
      gifts: data
    };
    // res.render("index");
    console.log(hbsObject);
    res.json(hbsObject);
  });
});

router.post("/gift", function(req, res) {
  // gift.create()
  var cols = "title, city_state, category, contact, item_description, img_link";
  var vals = [
    req.body.itemTitle,
    req.body.location,
    req.body.category,
    req.body.contact,
    req.body.description,
    req.body.upload
  ];
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
  var vals = [req.body.name, req.body.phone, req.body.email, req.body.pass];
  console.log(vals);
  user.create(cols, vals, function returnDataToController(result) {
    res.json({ result });
  });
});

router.get("/item/:id", function(req, res) {
  var id = parseInt(req.params.id);
  gift.findOne(id, function returnDataToController(result) {
    res.render("item", { id });
    // res.json({ result });
  });
});

router.get("*", function(req, res) {
  res.render("index");
});
module.exports = router;
