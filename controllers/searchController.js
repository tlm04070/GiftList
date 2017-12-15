// var express = require("express");

// var app = express.app();

// Import the model (cat.js) to use its database functions.
var gift = require("../models/gift.js");
var user = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/post", function (req, res) {
    res.render("post");
  });

  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  app.get("/list", function (req, res) {
    gift.all(function returnDataToController(data) {
      var info = {
        gifts: []
      };

      for (var i = 0; i < data.length; i += 1) {
        // Get the current gift.
        var currentGift = data[i];
        info.gifts.push(currentGift);
      }

      //console.log(info);
      res.render("list", info);
    });
  });

  app.get("/all", function (req, res) {
    gift.all(function returnDataToController(data) {
      var hbsObject = {
        gifts: data
      };
      // res.render("index");
      // console.log(hbsObject);
      res.json(hbsObject);
    });
  });

  app.post("/gift", function (req, res) {
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
      res.json({
        result
      });
    });
  });

  app.get("/users", function (req, res) {
    user.all(function returnDataToController(data) {
      var hbsObject = {
        users: data
      };
      res.json(data);
    });
  });

  app.post("/user/new", function (req, res) {
    var cols = "user_name, phone, email, pass_word";
    var vals = [req.body.name, req.body.phone, req.body.email, req.body.pass];
    console.log(vals);
    user.create(cols, vals, function returnDataToController(result) {
      res.json({
        result
      });
    });
  });

  app.get("/item/:id", function (req, res) {
    var id = parseInt(req.params.id);
    console.log("in /item:id", req.params.id)
    gift.findOne(id, function returnDataToController(result) {
      var hbsObject = result[0];
      // console.log(hbsObject);
      // res.render("item", result);
      res.render("item", hbsObject);
    });
  });

  app.get("*", function (req, res) {
    console.log('rendering index!!!')
    res.render("index");
  });
}

// module.exports = app;