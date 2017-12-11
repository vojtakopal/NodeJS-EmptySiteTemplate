var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hi, Vojta!' }));
    
}).listen(process.env.PORT || 8080);
