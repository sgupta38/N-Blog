// This program simply creates a server and listens on port 3000.
// Browser acts as a client.
// Just goto the browser and type url as : 127.0.0.1:3000
//
// It Displying data[contents of our .js file] on browser using 'pipe'.
//

var http = require('http');
var fs = require('fs');

// Lets  create a server.
var server = http.createServer(function(req, res){

    // We are responding with plain text.
    res.writeHead(200, {'Content-Type' : 'text/plain'});

    var myReadStream = fs.createReadStream(__dirname + '/server_pipe.js');

    // pipe the readStream data to res. See, we dont need to explicitly listen on any event.
    // pipe handles automatically and efficiently.
    myReadStream.pipe(res);
});

// Listening on port 3000
server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');
