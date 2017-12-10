var orm = require("../config/orm.js");

var user = {
  all: function(returnDataToController) {
    orm.all("users", function returnDataToModel(results) {
      returnDataToController(results);
    });
  },

  create: function(cols, vals, returnDataToController) {
    console.log("cols: " + cols);
    console.log("vals: " + vals);
    orm.create("users", cols, vals, function returnDataToModel(results) {
      returnDataToController(results);
    });
  }
};

module.exports = user;
