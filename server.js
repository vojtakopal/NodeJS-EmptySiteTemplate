var http = require('http');
var appInsights = require('applicationinsights');

appInsights.setup('5617aedb-c8ee-49b6-a312-8039cd1ee903').start();

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hi, Vojta!' }));
    
}).listen(process.env.PORT || 8080);
