/*----------------------------Syntax Error-----------------------------*/

"use strict";
iff (true) { //-> Uncaught SyntaxError: Unexpected token '{'
    console.log("true");
}


/*---------------------------Reference Error-----------------------------*/

let a = b; // -> Uncaught ReferenceError: b is not defined
fun(); // -> Uncaught ReferenceError: fun is not defined



/*---------------------------Type Error------------------------------*/

const someConstValue = 5;
someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.

let someNumber = 10;
someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function
