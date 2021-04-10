var net = require("net");

var server = net.createServer(function (socket) {
    var date = new Date();
    dateFormat =
        date.getFullYear() +
        "-" +
        pad(date.getMonth() + 1) +
        "-" +
        pad(date.getDate()) +
        " " +
        pad(date.getHours()) +
        ":" +
        pad(date.getMinutes()) +
        "\n";
    socket.end(dateFormat);
});
server.listen(process.argv[2]);
