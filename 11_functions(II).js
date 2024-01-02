"use strict";

/*------------------------------Parameter Validation---------------------------*/

function getMeanTemp(temperatures) {
     if (!(temperatures instanceof Array)) {
         return NaN;
     }
     let sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
         sum += temperatures[i];
     }
     return sum / temperatures.length;
}
 
console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20

/*---------------------------------Recursion----------------------------*/

// Without Recursion
function factorial (n) {
     let result = 1;
     while (n > 1) {
         result *= n;
         n--;
     }
     return result;
}
console.log(factorial(6)); // -> 720

// With Recursion

function factorial (n) {
     return n > 1 ? n * factorial(n - 1) : 1;
}
 
console.log(factorial(6)); // -> 720




/*----------------------------------Functions as first-class members----------------------------*/

function showMessage(message) {
     console.log(`Message: ${message}`);
} 
let sm = showMessage;
sm("This works!"); // -> Message: This works!
console.log(typeof sm); // -> function


function doNothing() {
     return undefined;
}
let a = doNothing(); // assign result of function call
let b = doNothing;   // assign a function
console.log(typeof a); // -> undefined
console.log(typeof b); // -> function


function add(a, b) {
     return a + b;
}
function multiply(a, b) {
     return a * b;
}
function operation(func, first, second) {
     return func(first, second);
}
console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200


/*------------------------------------Function expressions--------------------------------*/

function add(a, b) {
     return a + b;
}
let myAdd = add;
console.log(myAdd(10, 20)); 	// -> 30
console.log(add(10, 20));	// -> 30

// function expression(named)
let myAdd = function add(a, b) {
     return a + b;
} 
console.log(myAdd(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30

//unnamed
let myAdd = function(a, b) {
     return a + b;
}
console.log(myAdd(10, 20)); // -> 30


function operation(func, first, second) {
     return func(first, second);
} 
let myAdd = function(a, b) {
     return a + b;
}
console.log(operation(myAdd, 10, 20)); // -> 30
console.log(operation(function(a, b) {
     return a * b;
}, 10, 20)); // -> 200


/*-----------------------------------Callbacks--------------------------------------*/

//  Synchronous Callbacks

let inner = function() {
     console.log('inner 1');
}
let outer = function(callback) {
     console.log('outer 1');
     callback();
     console.log('outer 2');
} 
console.log('test 1');
outer(inner);
console.log('test 2');

/* output : test 1
            outer 1
            inner 1
            outer 2
            test 2  */


