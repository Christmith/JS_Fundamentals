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





