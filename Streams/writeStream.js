// Here, we have just created one writeStream that writes the data in chunks to file 'WriteMe.txt'

var http = require('http');
var fs = require('fs');

// Creating the 'readStream' and specifying the filename and its encoding.
// If 'utf8' is not supplied, it simply prints chunks in binary format.
var myReadStream = fs.createReadStream(__dirname + '/ReadMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');

// Whenever stream reads some data, 'data' event is invoked.
// Thus, listening for 'data' event. And when data is received, writing that chunk to the file.

// This is much efficient way as compared to readFile and writeFile because, data is being sent in chunks and quickly received at other end.
myReadStream.on('data', function(chunk){
    myWriteStream.write(chunk);
});
