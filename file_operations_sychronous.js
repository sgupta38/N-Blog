// Asynchronous functions: readFileSync() and writeFileSync().

var fs = require('fs'); // generally keep variable name equal to module name for convenience.

// readFileSync is a blocking call. It reads the whole file and then only, next lines of code will be executed.
// Note: Encoding is 'utf8' and not 'utf-8'

var readMe = fs.readFileSync('ReadMe.txt', 'utf8');
console.log(readMe);

// Now, writing the read buffer to new file named 'WriteMe.txt'.
// writeFileSync needs two parameters as Filename and buffer to be written.

fs.writeFileSync('WriteMe.txt', readMe);

//
// Also, you can delete the file using 'fs.unlink()'
//
//fs.unlink('WriteMe.txt');
