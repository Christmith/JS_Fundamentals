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

