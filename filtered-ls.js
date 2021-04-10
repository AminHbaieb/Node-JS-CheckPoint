var fs = require("fs");

var dirname = process.argv[2];
var ext = process.argv[3];
var extension = RegExp("." + ext);

fs.readdir(dirname, function (err, files) {
    for (i = 0; i < files.length; i++) {
        if (extension.test(files[i])) {
            console.log(files[i]);
        }
    }
});
