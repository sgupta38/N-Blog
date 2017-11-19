// Demonstrates the usage of partial templates.
//
// We have created partial template named 'nav.js' and included the same in all views.
// With this centralize navigation, it becomes easier to do changes and reflect the same in all views.
var express = require('express');

var app = express();

// setting viw engine: looked in 'views' folder by default
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

// Note in nav.ejs, we are creating request '/contactus' whenevr user clicks on 'Contact'.
// Handling the same request and rendering the respective page from 'views' folder.
app.get('/contactus', function(req, res){
    res.render('contact');
});

app.get('/engine/:id', function(req, res){
    res.send('You have requested the data for name: ' + req.params.id);
});

app.get('/profile/:name', function(req, res){
    var data = {age: 25, location: 'Pune', hobbies: ['Reading', 'Trekking', 'Music']};
        res.render('profile', {person: req.params.name, data: data}); // No need to give absolute path, it looks in 'views' folder.
});

app.listen(3000);
