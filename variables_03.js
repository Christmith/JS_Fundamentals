"use strict"; // using a variable without its previous declaration is treated as an error

/*----------------------------------Literals----------------------------------*/

let  year  =  1990;
console.log(year);  //  ->  1990
console.log(1991);  //  ->  1991
console.log("Alice");  //  ->  Alice

/*----------------------------------The typeof operator----------------------------------*/

let  year1  =  1990;
console.log(typeof  year1);  //  ->  number
console.log(typeof  1991);  //  ->  number
   
let  name  =  "Alice";
console.log(typeof  name);  //  ->  string
console.log(typeof  "Bob");  //  ->  string
   
let  typeOfYear  =  typeof  year;
console.log(typeOfYear);  //  ->  number
console.log(typeof  typeOfYear);  //  ->  string

/*----------------------------------Primitive data types----------------------------------*/

//  Boolean

let  isDataValid  =  true;
let  isStringTooLong  =  false;
let  isGameOver  =  false;
continueLoop  =  true;
   
console.log(false);  //  ->  false
console.log(typeof  false);  //  ->  boolean
console.log(isDataValid);  //  ->  true
console.log(typeof  isDataValid);  //  ->  boolean


//  Number

const  year2  =  1991;
let  delayInSeconds  =  0.00016;
let  area  =  (16  *  3.14);
let  halfArea  =  area  /  2;  
console.log(year2);  //  ->  1991;
console.log(typeof  year2);  //  ->  number;

let  a  =  10;  //  decimal  -  default  
let  b  =  0x10;  //  hexadecimal  
let  c  =  0o10;  //  octal  
let  d  =  0b10;  //  binary    
console.log(a);  //  ->  10  
console.log(b);  //  ->  16  
console.log(c);  //  ->  8  
console.log(d);  //  ->  2  
   
let  x  =  9e3;
let  y  =  123e-5;
console.log(x);  //  ->  9000
console.log(y);  //  ->  0.00123

let  e  =  1  /  0;
let  e  =  -Infinity; 
console.log(e);  //  ->  Infinity
console.log(f);  //  ->  -Infinity
console.log(typeof  e);  //  ->  number
console.log(typeof  f);  //  ->  number
   
let  s  =  "it's  definitely  not  a  number";
let  n  =  s  *  10;
console.log(n);  //  ->  NaN
console.log(typeof  n);  //  ->  number


//  BigInt

let  big  =  1234567890000000000000n;
let  big2  =  1n;  
console.log(big);  //  ->  1234567890000000000000n
console.log(typeof  big);  //  ->  bigint   
console.log(big2);  //  ->  1n
console.log(7n  /  4n);  //  ->  1n

let  big3  =  1000n  +  20;  
//  ->  Uncaught  TypeError:  Cannot  mix  BigInt  and  other  types,  use  explicit  conversions

let  big4  =  1000n  /  0n;  //  ->  Uncaught  RangeError:  Division  by  zero


//  String

let  country  =  "Malawi";
let  continent  =  'Africa';   
console.log(country);  //  ->  Malawi
console.log(typeof  country);  //  ->  string
console.log(continent);  //  ->  Africa
console.log(typeof  continent);  //  ->  string

let  message1  =  "The  vessel  'Mars'  called  at  the  port.";
let  message2  =  'Cyclone  "Cilida"  to  pass  close  to  Mauritius.';   
console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.


