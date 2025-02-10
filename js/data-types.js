/*
primitive data type:
string, number, null, undefined, boolean, symbol, 

complex data type:
Object:
    object, array, date


default data type of JS is string
*/

const name = "Abishkar Jung Shah"; // character, word, sentence
const age = 26; // numbers, decimals, negative
const bignumber = BigInt(1131313123123123123123123123); // very big numbers, cant use small numbers
// const small = BigInt(2.9);
// console.log(small);
let nuller = null; // empty, nothing, unknown
let x;
const isRaining = false; // true or false

//type conversion

// const value = "20";
// console.log(typeof value); //type checking
// const actvalue = parseInt(value);
// console.log(typeof actvalue);

const num = 13;
console.log(typeof num);
const stringnum = String(num);
console.log(typeof stringnum);

//write a program to ask the user two numbers and divide the first number by the second number and alert the answer

// const num1 = +prompt("Enter the first number");
// console.log(typeof num1);
// const num2 = prompt("Enter the second number");
// console.log(typeof num2);
// const result = num1 / num2;
// alert(`The result is ${result}`);

//unary operator
let val = 1;
val++;
console.log(val);
