"use strict";

/*-------------------------The while loop---------------------------*/

let n = 0;
while(n < 91) {
    console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;
}

let isOver = false;
let counter = 1; 
while (isOver != true) {
    let continueLoop = confirm(`[${counter}] Continue the loop?`);
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}


/*-------------------------The do … while loop---------------------------*/

let isOver;
let counter = 1; 
do {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
} while (!isOver);


/*-------------------------The for loop---------------------------*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190
/*--------------------------------Loops and arrays-----------------------------------------*/

let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}
for (let i = 0; i < names.length; i++){
    (names[i]);
}


let values = [10, 30, 50, 100];
for (let i = 0; i < values.length; i++) {
    console.log(values[i]); // -> 10, 30, 50, 100
} 
for (let i = values.length - 1; i > 0; i--) {
    console.log(values[i]); // -> 100, 50, 30, 10
}
for (let i = 0; i < values.length; i += 2) {
    console.log(values[i]); // -> 10, 50
}

/*------------------------for__of------------------------*/

let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

let values = [10, 30, 50, 100];
let sum = 0;
for (let number of values) {
    sum += number;
}
console.log(sum); // -> 190


let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];
 
for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}

/*------------------------------for … in--------------------------------*/

let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
 
for (let key in user) {
    console.log(key); // -> name, surname, age, email
};

for (let key in user) {
        console.log(`${key} -> ${user[key]}`);
};
