// Demonstates how HTML page is sent to browser.

var http = require('http');
var fs = require('fs');

// Lets  create a server.
var server = http.createServer(function(req, res){

    // We are responding with plain text.
    console.log('request received is: ' + req.url);
    res.writeHead(200, {'Content-Type' : 'text/html'});

    var myReadStream = fs.createReadStream(__dirname + '/index.html');

    // pipe the readStream data to res. See, we dont need to explicitly listen on any event.
    // pipe handles automatically and efficiently.
    myReadStream.pipe(res);
});

// Listening on port 3000
server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');
