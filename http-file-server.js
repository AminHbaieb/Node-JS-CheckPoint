var http = require("http");
var fs = require("fs");

var portNumber = process.argv[2];
var fileToServe = process.argv[3];
var server = http.createServer(function (request, response) {
    var stream = fs.createReadStream(fileToServe);
    stream.pipe(response);
});
server.listen(portNumber);
