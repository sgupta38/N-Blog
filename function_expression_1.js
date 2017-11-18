// normal function statement

function sayHi(){
    console.log("this is first program");
    }

sayHi();


// function expression
// Notice that variable has assigned the anonymous function and later we are invoking the function with
// the varible name:
var sayBye = function(){
    console.log("Bye guys");
}

sayBye();

// Call back functions
// Here, we can call call one function from another function, this is called as nested functions.

function callFunction(fun){
    fun();
}

callFunction(sayBye);
