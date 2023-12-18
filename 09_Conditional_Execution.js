"use strict"; // using a variable without its previous declaration is treated as an error

/*------------------If statement--------------------*/
let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
}

let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
console.log(total); // -> Uncaught ReferenceError: total is not defined


let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;
if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
} 
console.log(shippingCost);


/*-------------------------The if ... else statement---------------------------*/

let isUserReady = confirm("Are you ready?");
if (isUserReady) {
    console.log("User ready!");
} 
if (isUserReady == false) {
    console.log("User not ready!");
}

let isUserReady = confirm("Are you ready?");
if (isUserReady) {
    console.log("User ready!");
} else {
    console.log("User not ready!");
}


/*---------------------------------The if … else … if statement------------------------------*/

let number = prompt("Enter a number", 0);
if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("<60");
} else if (number < 90) {
    alert("<90");
} else if (number < 100) {
    alert("<100");
} else if (number == 100) {
    alert("100")
} else {
    alert(">100")
}

/*---------------------------Condition operaor-------------------------------*/

let price = 100;
let shippingCost = price > 50 ? 0 : 5;
console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

let start = confirm("Start?");
start ? alert("Here we go!") : console.log("Aborted");



/*----------------------The switch … case statement-----------------------------*/
let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}

let number1 = Number(prompt("Enter first number"));
      let number2 = Number(prompt("Enter second number"));
      let operand = prompt("Enter operand(+,-,*,/)");
      let result = 0;
      if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
        switch (operand) {
          case "+":
            number1 + number2;
            break;
          case "-":
            number1 - number2;
            break;
          case "*":
            number1 * number2;
            break;
          case "/":
            number1 / number2;
            break;
          default:
            alert("Invalid operand");
        }
      } else {
        alert("Error:at least one of the inputs is not a number");
      }
      alert(result);
