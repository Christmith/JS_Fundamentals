"use strict"; // using a variable without its previous declaration is treated as an error


/*------------------------------Type something in console------------------------------*/
console.log("Hello, World!");  //  ->   Hello, World!
console.log(100);  //  ->  100
console.log(true);  // ->  true


/*--------------------------------Declaring variables--------------------------------*/
var  height;
console.log(height);  //  ->  undefined
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined
let weight;
console.log(weight);  //  ->  undefined


/*--------------------------------Initializing variables--------------------------------*/
height  =  180;
let  anotherHeight  =  height;
console.log(height);  //  ->  180
console.log(anotherHeight);  //  ->  180
weight  =  70;    
console.log(weight);  //  ->  70


/*--------------------------------Changing variable values--------------------------------*/
let  steps  =  100;
console.log(steps);  //  ->  100
steps  =  120;  //  ->  120
console.log(steps);
steps  =  steps  +  200;
console.log(steps);  //  ->  320

let  greeting  =  "Hello!";
console.log(greeting);  //  ->  Hello!
greeting  =  100;
console.log(greeting);  //  ->  100

greeting  =  "Hello!";
let counter = 100;
greeting  =  greeting + counter;
console.log(greeting);  //  ->  Hello!100


/*--------------------------------Using constant variables--------------------------------*/
const  greetingConst1;  //  ->  Uncaught  SyntaxError:  Missing  initializer  in  const  declaration
const  greetingConst2  =  "Hello!";
greetingConst2 = "Hi!"; // -> Uncaught TypeError: Assignment to constant variable.
