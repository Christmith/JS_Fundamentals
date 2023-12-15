"use strict"; // using a variable without its previous declaration is treated as an error

Const  num  =  42;  
const  strFromNum1  =  String(num);
const  strFromNum2  =  String(8);
const  strFromBool  =  String(true);
const  numFromStr  =  Number("312");
const  boolFromNumber  =  Boolean(0);

/*----------------------------------------Conversion to String----------------------------------------*/
let  str  =  "text";
let  strStr  =  String(str);
console.log(`${typeof  str}  :  ${str}`);  //  ->  string  :  text
console.log(`${typeof  strStr}  :  ${strStr}`);  //  ->  string  :  text   

let  nr  =  42;
let  strNr  =  String(nr);
console.log(`${typeof  nr}  :  ${nr}`);  //  ->  number  :  42
console.log(`${typeof  strNr}  :  ${strNr}`);  //  ->  string  :  42   

let  bl  =  true;
let  strBl  =  String(bl);
console.log(`${typeof  bl}  :  ${bl}`);  //  ->  boolean  :  true
console.log(`${typeof  strBl}  :  ${strBl}`);  //  ->  string  :  true   

let  bnr  =  123n;
let  strBnr  =  String(bnr);
console.log(`${typeof  bnr}  :  ${bnr}`);  //  ->  bigint  :  123
console.log(`${typeof  strBnr}  :  ${strBnr}`);  //  ->  string  :  123
   
let  un  =  undefined;
let  strUn  =  String(un);
console.log(`${typeof  un}  :  ${un}`);  //  ->  undefined  :  undefined
console.log(`${typeof  strUn}  :  ${strUn}`);  //  ->  string  :  undefined
  
let  n  =  null;
let  strN  =  String(n);
console.log(`${typeof  n}  :  ${n}`);  //  ->  object  :  null
console.log(`${typeof  strN}  :  ${strN}`);  //  ->  string  :  null

/*----------------------------------------Conversion to Number----------------------------------------*/

console.log(Number(42));  //  ->  42
   
console.log(Number("11"));  //  ->  11
console.log(Number("0x11"));  //  ->  17
console.log(Number("0o11"));  //  ->  9
console.log(Number("0b11"));  //  ->  3
console.log(Number("12e3"));  //    ->  12000
console.log(Number("Infinity"));//  ->  Infinity
console.log(Number("text"));  //  ->  NaN
   
console.log(Number(14n));  //  ->  14
console.log(Number(123456789123456789123n));  //  -  >    123456789123
456800000
   
console.log(Number(true));  //  ->  1
console.log(Number(false));  //  ->  0
   
console.log(Number(undefined));  //    ->  NaN
   
console.log(Number(null));//  ->  0

/*----------------------------------------Conversion to Boolean----------------------------------------*/


console.log(Boolean(true));  //  ->  true  
console.log(Boolean(42));  //  ->  true   
console.log(Boolean("text"));  //  ->  true   

console.log(Boolean(null));  //  ->  false
console.log(Boolean(0));  //  ->  false
console.log(Boolean(NaN));  //  ->  false
console.log(Boolean(""));  //  ->  false
console.log(Boolean(undefined));  //  ->  false

/*----------------------------------------Conversion to BigInt----------------------------------------*/

console.log(BigInt(11));  //  ->  11n
console.log(BigInt(0x11));  //  ->  17n
console.log(BigInt(11e2));  //  ->  1100n
   
console.log(BigInt(true));  //  ->  1n
   
console.log(BigInt("11"));  //  ->  11n
console.log(BigInt("0x11"));  //  ->  17n
   
console.log(BigInt(null));  //  ->  Uncaught  TypeError:  Cannot  convert  null  to  a  BigInt
   
console.log(BigInt(undefined));  //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt
   
console.log(BigInt(NaN));  //  ->  Uncaught  RangeError:  The  number  NaN  cannot  be  converted  to  a  BigInt  because  it  is  not  an  integer

/*----------------------------------------Implicit Conversions----------------------------------------*/

const  str1  =  42  +  "1";
console.log(str1);                //  ->  421
console.log(typeof  str1);  //  ->  string
   
const  str2  =  42  -  "1";
console.log(str2);                //  ->  41
console.log(typeof  str2);  //  ->  number


