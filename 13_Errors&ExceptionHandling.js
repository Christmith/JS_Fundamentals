/*----------------------------------------------Type of errors-------------------------------------------*/

/*----------------------------Syntax Error-------------------------------*/

iff (true) { //-> Uncaught SyntaxError: Unexpected token '{'
    console.log("true");
}
/*---------------------------Reference Error-----------------------------*/

let a = b; // -> Uncaught ReferenceError: b is not defined
fun(); // -> Uncaught ReferenceError: fun is not defined

/*---------------------------Type Error---------------------------------*/

const someConstValue = 5;
someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.
let someNumber = 10;
someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function

/*--------------------------Range Error---------------------------------*/

let testArray1 = Array(10);
console.log(testArray1.length); // -> 10
let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
console.log(testArray2.length);

/*---------------------------------------------The try...catch statement-----------------------------------*/

try {
    let a = b;
} catch (error) {
    console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
}
console.log("We handled the exception!"); // -> we handled the exception!

/*---------------------------------------------Conditional exception handling--------------------------------------------*/

let a = -2;
try {
    a = b;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
        a = -2;
    } else {
        console.log("Other error - " + error);
    }
}
console.log(a); // -> -2
