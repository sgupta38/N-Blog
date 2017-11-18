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
