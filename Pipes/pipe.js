//
// This is the most efficient method of data writing to the file.
// You may say whats different in this? Here, we dont need to listen for the event 'data' manually as we did in streams tutorial.
// But yes, we do require read and write stream.
// You should know that, pipe can always be used with readStream as it has some data.
//

var http = require('http');
var fs = require('fs');

// Creating the 'readStream' and specifying the filename and its encoding.
// If 'utf8' is not supplied, it simply prints chunks in binary format.
var myReadStream = fs.createReadStream(__dirname + '/ReadMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/WriteMe.txt');


// pipe the readStream data to writeStream.
myReadStream.pipe(myWriteStream);
