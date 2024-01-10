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

/*--------------------------------------------- The finally statement--------------------------------------------------*/

let a = 10;
try {
    a = 5;
} finally {
    console.log(a); // -> 5
}
console.log(a); // -> 5


let a = 10;
try {
    a = b;  // ReferenceError
} finally {
    console.log(a); // -> 10
}
console.log(a);

let a = 10;
try {
    a = b;  // ReferenceError
} catch (error) {
    console.log("An Error!"); // -> An Error!
} finally {
    console.log("Finally!"); // -> Finally!
}
console.log(a); // -> 10

// nested try catch finally blocks

let a = 10;
try {
    a = b; // First ReferenceError
} catch (error) {
    try {
        console.log(b); // Second ReferenceError
    } catch {
        console.log("Second catch!"); // -> Second catch!
    }
} finally {
    console.log("Finally!"); // -> Finally!
}


/*------------------------------------------------The throw statement and custom errors---------------------------------------------*/

Function factorial(n) {
    if (n > 20) {
        throw new RangeError("Max value 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}
 
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Max value 20

