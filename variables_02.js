"use strict"; // using a variable without its previous declaration is treated as an error

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


