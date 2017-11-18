// Creates and deletes the directories asynchronously.

// This file will simply create the folder 'stuff' and once created, it will create a file named 'WriteMe.txt'.
// Once tested, you can comment the code of creation & uncommnet the next lines of code which removes the directory stuff.


var fs = require('fs');

// create directory asynchromously.
// Note: Whenever we use 'asynchronous' methods, it is necessary to write the 'callback function' to do something once this action is completed.

// fs.mkdir('stuff', function(){
//     fs.readFile('ReadMe.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff/WriteMe.txt', data, function(){
//             console.log('Created Successfully..!!');
//         });
//     });
// });

//
// To delete the directory, we need to delete files inside the directory first and then remoce the directory.
//

fs.unlink('./stuff/WriteMe.txt', function(){
    fs.rmdir('stuff', function(){
        console.log('Successfully deleted..!!');
    });
});
