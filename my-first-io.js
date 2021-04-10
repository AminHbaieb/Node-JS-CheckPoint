var fs = require("fs");

var file = process.argv[2];

buffer = fs.readFileSync(file);

str = buffer.toString();

console.log(str.split("\n").length - 1);
