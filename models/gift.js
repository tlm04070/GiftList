var orm = require("../config/orm.js");

var gift = {
  all: function(returnDataToController) {
    orm.all("gifts", function returnDataToModel(results) {
      returnDataToController(results);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, returnDataToController) {
    orm.create("gifts", cols, vals, function returnDataToModel(result) {
      returnDataToController(result);
    });
  }
};

// Export the database functions for the controller (giftsController.js).
module.exports = gift;

// Sequelize functionality:
// "use strict";

// var fs = require("fs");
// var path = require("path");
// var Sequelize = require("sequelize");
// var basename = path.basename(__filename);
// var env = process.env.NODE_ENV || "development";
// var config = require(__dirname + "/../config/config.json")[env];
// var db = {};

// if (config.use_env_variable) {
//   var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   var sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach(file => {
//     var model = sequelize["import"](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
