var connection = require("./connection.js");

var orm = {
  // selectWhere: function(tableInput, colToSearch, valOfCol) {
  //   var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  //   connection.query(queryString, [tableInput, colToSearch, valOfCol], function(
  //     err,
  //     result
  //   ) {
  //     return result;
  //   });
  // },
  all: function(tableInput, returnDataToModel) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) {
        throw err;
      }
      returnDataToModel(result);
    });
  },
  create: function(tableInput, cols, vals, returnDataToModel) {
    console.log("arguments: " + arguments[1]);
    console.log("arguments: (" + arguments[2] + ");");
    var queryString = "INSERT INTO ?? (" + cols + ") VALUES (" + vals + ");";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      returnDataToModel(result);
    });
  }
};

module.exports = orm;
