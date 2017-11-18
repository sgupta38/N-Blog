// Demonstates how JSON data sent to browser.

var http = require('http');
var fs = require('fs');

// Lets  create a server.
var server = http.createServer(function(req, res){

    // We are responding with plain text.
    res.writeHead(200, {'Content-Type' : 'application/json'});
    var myObj = {
            name: 'sonu',
            job: 'developer',
            mobile_no: '9999999999'
    };

    //JSON.stringify is must if you are sending the json object
    res.end(JSON.stringify(myObj));
});

// Listening on port 3000
server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');
