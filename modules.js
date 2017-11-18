var stuff = require('./stuff')

//
// Here, all the exported functions are loaded in 'stuff' variable, now just use reuired function and variable like
//  you call functions in c++.
//
console.log(stuff.counter(['a', 'b', 'c']));
console.log(stuff.adder(5, 10));
console.log(stuff.adder(stuff.pi, 10));
console.log(stuff.pi);

// This should work as in stuff.js, we have directly exported & assigned.
stuff.winter();

// literal notation way [only one way can work either regular or literal notation]
//console.log(stuff.multiplier(5, 10));
