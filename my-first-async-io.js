var fs = require("fs");

var filename = process.argv[2];

fs.readFile(filename, function (err, buffer) {
    console.log(buffer.toString().split("\n").length - 1);
});
