// Demonstrates the usage of module express.
//
var express = require('express');

var app = express();

app.get('/', function(req, res){

    // Note that , it has provided in built method 'send()'
    // Unlike our previous tutorials, we dont need to call writeHead() and mention about content-type.
    // This is the advantage of express for faster development.

    res.send('This is just the homepage');
});

app.get('/contact', function(req, res){
    res.send('This is just the contact');
});


// This is awesome. It can be used in dynamically changing pages.
app.get('/profile/:name', function(req, res){
    res.send('You have requested the data for name: ' + req.params.name);
});

app.listen(3000);
