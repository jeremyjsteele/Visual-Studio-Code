var http = require('http');
var dir = require('./dir');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("directory" + dt.myDateTime());
  res.end();
}).listen(8080);