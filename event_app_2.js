// The node Event Emitter

//
// Creating the variable will load all the objects of core module in that variable. One of the objects is 'EventEmitter', which will be further used for creating
// customized events.
var events = require('events');  // core module in node.js, don't give path, just its name is enough

// Another core module in node.js. This contains utilities. one of the things is that it allows us to inherit certain things from objects.
var util = require('util');

var Person = function(name){
    this.name = name;
};

// Inherit the eventEmitter. Attaching cutomized event with Person.
// So now, any newly created events will be associated with objects those were created by using Person.
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var sonu = new Person('sonu');
var jeremy = new Person('jeremy');

//
// Lets viral some event listeners
var people = [james, sonu, jeremy];

// Attaching the cutomized event 'speak' with person objects.
people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' has said : ' + msg);
    });
});

sonu.emit('speak', 'Winter is coming');
james.emit('speak', 'Valar Morghulis');
jeremy.emit('speak', 'Valar Dohaeriss');
sonu.emit('speak', 'hmmmmmmmm, really..!!');
