let prompt = require('prompt-sync')();
let customfunctions = require('./customfunctions')
let number1 = parseInt(prompt("Please Enter First number"));
let number2 = parseInt(prompt("please enter second number"));

console.log("Adding");
console.log(customfunctions.Add(number1, number2));
console.log("subtract")

    



console.log("Multipluy");
console.log(customfunctions.multiply(number1, number2));
console.log("Division");
console.log(customfunctions.divide(number1, number2));



