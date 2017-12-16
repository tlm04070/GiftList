module.exports = function(filePath, cb) {
  var cloudinary = require("cloudinary");

  cloudinary.config({
    cloud_name: "tlm04070",
    api_key: "577913342161751",
    api_secret: "MAFKgFa4JG1hnXG45O5EJgoZ7qY"
  });

  cloudinary.uploader.upload(filePath, function(result) {
    console.log(result);
    cb(result);
  });
};
