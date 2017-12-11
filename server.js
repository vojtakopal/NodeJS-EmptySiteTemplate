var http = require('http');
var appInsights = require('applicationinsights');

appInsights.setup('c792a052-7594-4f3d-97d0-76868f1a137a').start();

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hi, Vojta!' }));
    
}).listen(process.env.PORT || 8080);
