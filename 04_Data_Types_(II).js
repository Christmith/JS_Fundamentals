"use strict"; // using a variable without its previous declaration is treated as an error

/*------------------------------Complex Data Types-----------------------------*/

/*-----------Objects-----------*/
let  testObj  =  {};
console.log(typeof  testObj);  //  ->  object

let  testObj2  =  {
	nr:  600,
	str:  "text"
};
console.log(testObj.nr);  //  ->  600
console.log(testObj.str);  //  ->  text

let  user1  =  {
         name:  "Calvin",
         surname:  "Hart",
         age:  66,
         email:  "CalvinMHart@teleworm.us"
};   
let  user2  =  {
         name:  "Mateus",
         surname:  "Pinto",
         age:  21,
         email:  "MateusPinto@dayrep.com"
};
console.log(user1.name);  //  ->  Calvin
console.log(user2.name);  //  ->  Mateus   
console.log(user1.age);  //  ->  66
user1.age  =  67;
console.log(user1.age);  //  ->  67   
console.log(user2.phone);  //  ->  undefined
user2.phone  =  "904-399-7557";
console.log(user2.phone);  //  ->  904-399-7557
console.log(user2.phone);  //  ->  904-399-7557
delete  user2.phone;
console.log(user2.phone);  //  ->  undefined

/*-----------Arrays-----------*/
let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
console.log(days[0]);  //  ->  Sun
console.log(days[2]);  //  ->  Tue
console.log(days[5]);  //  ->  Fri\  
days[0]  =  "Sunday";
console.log(days[0]);  //  ->  Sunday
   
let  emptyArray  =  [];
console.log(emptyArray[0]);  //  ->  undefined

let  users  =[  
         {
                 name:  "Calvin",
                 surname:  "Hart",
                 age:  66,
                 email:  "CalvinMHart@teleworm.us"
         },
         {
                 name:  "Mateus",
                 surname:  "Pinto",
                 age:  21,
                 email:  "MateusPinto@dayrep.com"
         }
];   
console.log(users[0].name);  //  ->  Calvin
console.log(users[1].age);  //  ->  21

users[2]  =  {
         name:  "Irene",
         surname:  "Purnell",
         age:  32,
         email:  "IreneHPurnell@rhyta.com"
   
}  
console.log(users[0].name);  //  ->  Calvin
console.log(users[1].name);  //  ->  Mateus
console.log(users[2].name);  //  ->  Irene


let  days  =  ["Sun",  "Mon",  "Tue",  "Wed",  "Thu",  "Fri",  "Sat"];
let day = "Sunday";
console.log(typeof days); // -> object
console.log(typeof day); // -> string
console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false

//  length

let  names    =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4
   
names[5]  =  "Amelia";
console.log(names.length);  //  ->  6
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo",  "Samuel",  undefined,  "Amelia"]
console.log(names[3]);  //  ->  Samuel
console.log(names[4]);  //  ->  undefined
console.log(names[5]);  //  ->  Amelia

// indexof

let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.indexOf("Mateo"));  //  ->  2
console.log(names.indexOf("Victor"));  //  ->  -1

//  push

let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4 
names.push("Amelia");
console.log(names.length);  //  ->  5
console.log(names);  //  -  >  ["Olivia",  "Emma",  "Mateo",  "Samuel",  "Amelia"]

//  unshift

let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4 
names.unshift("Amelia");
console.log(names.length);  //  ->  5
console.log(names);  //  -  >  [ "Amelia", "Olivia",  "Emma",  "Mateo",  "Samuel",]

//  pop

let  names=  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4  
let  name  =  names.pop();
console.log(names.length);  //  ->  3
console.log(name);  //  ->  Samuel
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo"]

//  shift

let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
console.log(names.length);  //  ->  4   
let  name  =  names.shift();
console.log(names.length);  //  ->  3
console.log(name);  //  ->  Olivia
console.log(names);  //  ->  ["Emma",  "Mateo",  "Samuel"]

//  reverse

let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];  
names.reverse();
console.log(names);  //  ->  ["Samuel",  "Mateo",  "Emma", "Olivia"]

//  slice

let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];

let  n1  =  names.slice(2);
console.log(n1);  //  ->  ["Mateo",  "Samuel"]
   
let  n2  =  names.slice(1,3);
console.log(n2);  //  ->  ["Emma",  "Mateo"]
   
let  n3  =  names.slice(0,  -1);
console.log(n3);  //  ->  ["Olivia",  "Emma",  "Mateo"]
   
let  n4  =  names.slice(-1);
console.log(n4);  //  ->  ["Samuel"]
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo", "Samuel"]

//  concat

let  names  =  ["Olivia",  "Emma",  "Mateo",  "Samuel"];
let  otherNames  =  ["William",  "Jane"];
let  allNames  =  names.concat(  otherNames);
   
console.log(names);  //  ->  ["Olivia",  "Emma",  "Mateo",
   "Samuel"]
console.log(otherNames);  //  ->  ["William",  "Jane"]
console.log(allNames);  //  ->  ["Olivia",  "Emma",  "Mateo",
   "Samuel",  "William",  "Jane"]








