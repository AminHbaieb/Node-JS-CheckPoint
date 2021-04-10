var http = require("http");
var map = require("through2-map");

var port = process.argv[2];

http.createServer(function (request, response) {
    if (request.method === "POST") {
        return response.end("send me a POST\n");
    } else {
        response.writeHead(405);
    }
    response.writeHead(200, { "Content-Type": "text/plain" });
    request
        .pipe(
            map(function (chunk) {
                return chunk.toString().toUpperCase();
            })
        )
        .pipe(response);
});

server.listen(Number(process.argv[2]));
