// Creates and deletes the directories synchronously.

var fs = require('fs');

// create directory
fs.mkdirSync('stuff');

// deletes the created directory. Just uncomment following line.
//fs.rmdirSync('stuff');
