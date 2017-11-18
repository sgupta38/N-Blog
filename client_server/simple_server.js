// This program simply creates a server and listens on port 3000.
// Browser acts as a client.
// Just goto the browser and type url as : 127.0.0.1:3000

// This is just like including header file in c++.
// 'http' is a buil-in core module which provides various functionality related to http services.
var http = require('http');

// Lets  create a server.
var server = http.createServer(function(req, res){

    //Lets print the url hitted on client.
    console.log('Request was made: ' + req.url);

    // We are responding with plain text.
    res.writeHead(200, {'Content-Type' : 'text/plain'});

    // This is to let the client know about 'end' of message. Also, notice that we are our responce at the same time.
    res.end('Valar Morghulis..!!');
});

// Listening on port 3000
server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');
