//excuting same logic over and over
//for
//while
//do while

//sum of n natural numbers

// const n = prompt("Enter a positive number: ");
// let sum = 0;
// for (i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(`The sum of natural numbers from 1 to ${n} is ${sum}`);

//multiplication table

// const number = parseInt(prompt("Enter an integer: "));
// for (i = 1; i <= 10; i++) {
//   const result = number * i;
//   console.log(`${number} * ${i} = ${result}`);
// }

//sum of 1 to 100
// let sum = 0;
// for (i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(`The sum of natural numbers from 1 to 100 is ${sum}`);

//multiplication table using do while
// let number = parseInt(prompt("Enter an integer: "));
// let i = 1;
// do {
//   console.log(`${number} * ${i} = ${number * i}`);
//   i++;
// } while (i <= 10);

//sum of even numbers between 1 to 100
let sum = 0;
let i = 1;
do {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
} while (i <= 100);
console.log(`The sum of even numbers from 1 to 100 is ${sum}`);
