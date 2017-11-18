var counter = function(arr){
    return 'Total number of elements is: ' + arr.length;
}

var adder = function(a, b){
    // This is template string unlike ablove method, you dont need to explicitly concat the strings. ``
    return `The addition of two numbers is: ${a+b}`
}

var pi = 3.142;


//
// If you want to use the function 'counter' outside any .js file,
//  you have to export it and use "reuire('./xxx')"" in the target file.
//
//
//  Here, module.exports is just a empty object, if you wush to export myriad numeber of functions and variables,
//  you have to explicitly append new property to module.exports and just assign the required function / variable name.
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;


//
// As you have observed above, there is so much of rework. You need to explicitly export and assgin function names.
//
// The easiest and simplest way which reduces the code is as follows:


module.exports.winter = function(){
    console.log("Winter is coming...!!");
}

// [Note: only one way can work either regular or literal notation]
//  One more way is literal natation way.
//

var multiplier = function(a,b){
    return `The multiplication is : ${a*b}`
}

//
// Denote like this:

//module.exports = {
//    multiplier : multiplier
//}
