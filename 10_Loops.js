"use strict";

/*-------------------------The While Loop---------------------------*/

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

