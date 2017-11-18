// Asynchronous functions: readFile() and writeFile().

var fs = require('fs');

// For asynchronous function all we need is the extra third parameter 'callback function' which tells us when file READ operation is completed.
//
// Advantage is that it's unblocking. That is next lines of code will be executed DURING THE FILE IS BEING READ.
//
fs.readFile('ReadMe.txt', 'utf8', function(err, data){
    console.log(data);
});

console.log('Woww, this flow is unblocking.');

//
// When you run above lines of code, you will see that, Message 'Woww, this flow is unblocking.' is printed while file was being read.
//
//
fs.readFile('ReadMe.txt', 'utf8', function(err, data){
    fs.writeFile('WriteMeAsync.txt', data);
});

//
// Also, you can delete the file using 'fs.unlink()'
//
//fs.unlink('WriteMeAsync.txt');
