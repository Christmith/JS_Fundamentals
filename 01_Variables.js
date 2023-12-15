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


/*-------------------------------Scope-------------------------------*/
//  Program blocks
let  counter;
console.log(counter);  //  ->  undefined
{
         counter  =  1;
         {
                 console.log(counter);  //  ->  1
         }
}
counter  =  counter  +  1;
console.log(counter);  //  ->  2


//  let and const
let  height  =  180;
{
         let  weight  =  70;
         console.log(height);  //  ->  180
         console.log(weight);  //  ->  70	
}
console.log(height);  //  ->  180
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined

const  height2  =  200;
{
         const  weight2  =  100;
         {
                 let  info  =  "tall";
                 console.log(height2);  //  ->  200
                 console.log(weight2);  //  ->  100
                 console.log(info);  //  ->  tall
         }
         console.log(height2);  //  ->  200
         console.log(weight2);  //  ->  100
         console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
}


// var
var  height3  =  180;
{
         var  weight3  =  70;
         console.log(height3);  //  ->  180
         console.log(weight3);  //  ->  70	
}
console.log(height3);  //  ->  180
console.log(weight3);  //  ->  70

var  globalGreeting  =  "Good  ";   
function  testFunction()  {
         var  localGreeting  =  "Morning  ";    
         console.log("function:");
         console.log(globalGreeting);
         console.log(localGreeting);
}  
testFunction();  
console.log("main  program:");
console.log(globalGreeting);
console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined


/*-------------------------------Variable shadowing-------------------------------*/
//without shadowing
let  counter1  =  100;
console.log(counter1);  //  ->  100
{
       counter1  =  200;
       console.log(counter1);  //  ->  200
}
console.log(counter1);  //  ->  200

//with shadowing
let  counter2  =  100;
console.log(counter2);  //  ->  100
{
     let  counter2  =  200;
     console.log(counter2);  //  ->  200
}
console.log(counter2);  //  ->  100

var  counter3  =  100;  
function  testFunction()  {
         var  counter3  =  200;    
         console.log(counter3);
}
   
console.log(counter3);  //  ->  100
testFunction();  //  ->  200
console.log(counter3);  //  ->  100


/*-------------------------------Variable hoisting-------------------------------*/
var  height4  =  180;
console.log(height4);    //  ->  180
console.log(weight4);    //  ->  Uncaught  ReferenceError:  weight  is  not  defined

var  height  =  180;
console.log(height);    //  ->  180
console.log(weight);    //  ->  undefined
var  weight  =  70;
console.log(weight);    //  ->  70
