var fs = require("fs");
var path = require("path");

module.exports = function (dirname, ext, callback) {
    var extension = "." + ext;
    fs.readdir(dirname, function (err, files) {
        if (err) {
            callback(err, null);
        } else {
            container = [];
            files.forEach(function (file) {
                if (path.extname(file) == extension) {
                    container.push(file);
                }
            });
            callback(null, container);
        }
    });
};
