// Demonstrates the usage of module express.
//
var express = require('express');

var app = express();

// setting viw engine: looked in 'views' folder by default
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});


app.get('/engine/:id', function(req, res){
    res.send('You have requested the data for name: ' + req.params.id);
});

app.get('/profile/:name', function(req, res){
    var snow = {age: 25, location: 'WinterFell', hobbies: ['Ruling', 'Fighting', 'Watching']};
    var khaleesi = {age: 24, location: 'Dragon Stone', hobbies: ['Flying', 'Ruling', 'Fighting']};
    var unknown = {age: 0, location: 'unknown', hobbies: ['none', 'really none']};
    if(req.params.name === 'snow')
    {
        res.render('profile', {person: req.params.name, data: snow}); // No need to give absolute path, it looks in 'views' folder.
    }
    else if(req.params.name === 'khaleesi')
    {
        res.render('profile', {person: req.params.name, data: khaleesi}); // No need to give absolute path, it looks in 'views' folder.
    }
    else {
        res.render('profile', {person: req.params.name, data: unknown});
    }
});

app.listen(3000);
