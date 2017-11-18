// This tutorial is about routing of the requests.
//

var http = require('http');
var fs = require('fs');

// Lets  create a server.
var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);

    if(req.url === '/' || req.url === '/home')
    {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if(req.url === '/api'){
        res.writeHead(200, {'Content-Type' : 'application/json'});
        var myObj = {
            name: 'sonu',
            country: 'India',
            city: 'Pune',
            mobile_no: '9999999999'
        };

        res.end(JSON.stringify(myObj));
    }
    else {
        res.writeHead(200, {'Content-Type' :'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

// Listening on port 3000
server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');
