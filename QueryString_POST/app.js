// Demonstrates the usage of partial templates.
//

var express = require('express');
var bodyParser = require('body-parser')

var app = express();

// this is middleware which is going to parse our post data
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// setting viw engine: looked in 'views' folder by default
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

 // Post request:
 app.post('/contact', urlencodedParser, function(req, res){
     console.log(req.body);
     res.render('contact-success', {data: req.body});
 });

// Query String:
app.get('/query', function(req, res){
    console.log(req.query);
    res.render('query');
});

app.listen(3000);
