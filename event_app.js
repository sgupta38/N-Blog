
//
// node.js has some inbuilt events already written. All you have to do is just include it.
//
var events = require('events');

// Also, you can create your own events by just creating the object of the events using eventEmitter functionality.
//
// Lets, create cutomized event names myEmitter.

var myEmitter = new events.EventEmitter();


// Following function with '.on' simply means we are "Listening" for the event 'anyEvent' and when that particular event
//  occurs, just do the things written in our call back function. That's it.
//
myEmitter.on('anyEvent', function(msg){
    console.log(msg);
});

// Manually emiting the event using '.emit'
// paramters are 'event name' and parameter of callback function.
myEmitter.emit('anyEvent', 'The event was emitted...!!');
