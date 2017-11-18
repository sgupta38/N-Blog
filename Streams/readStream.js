// Here, we have just created one readStream reads the data in chunks and outputs on console.

var http = require('http');
var fs = require('fs');

// Creating the 'readStream' and specifying the filename and its encoding.
// If 'utf8' is not supplied, it simply prints chunks in binary format.
var myReadStream = fs.createReadStream(__dirname + '/ReadMe.txt', 'utf8');

// Whenever stream reads some data, 'data' event is invoked.
// Thus, listening for 'data' event.
myReadStream.on('data', function(chunk){
    console.log('New chunk received: ');
    console.log(chunk);
});
