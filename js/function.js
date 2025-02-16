//block of code that can be reused multiple times
// function myFunction() {
//   alert("My function is called");
// }

//1. Arrow function
//2. Default function
//3. Parameterized function
//4. Closure function
//5. IIFEs function

//function to add two numbers

// const a = +prompt("Enter first number");
// const b = +prompt("Enter second number");
// const c = 0;
// function sum(a, b) {
//   c = a + b;
//   console.log(c);
// }

//write a function to calculate the area of a circle

// const pi = 3.14;

// function areaOfCircle(r) {
//   let area = pi * r * r;
//   console.log(area);
// }

// const r = parseFloat(prompt("Enter the radius of the circle"));

// areaOfCircle(r);

/*
Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 34223

Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. Example string : 'The quick brown fox' Expected Output : 5

Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.

Write a JavaScript function to get the number of occurrences of each letter in a specified string.

Write a JavaScript function to find the first not repeated character. Sample arguments : 'abacddbec' Expected output : 'e'

Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output. Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"]) Expected output : "United States of America"

Write a function findSquare() returns the square of the input number which is passed as an argument in the function call.

Write a function to calculate compound interest based on the principle amount

Write a js function that convert full name to proper case Eg: raktim kumar shrestha => Raktim Kumar Shrestha

Write a implicit js function that formats the number in following format. 10000 => 10,000 1000000 =>10,000,000
*/

// function to reverse a number

// function reverseNumber(num) {
//   let reversed = num.toString().split("").reverse().join("");
//   console.log(reversed);
// }

// const num = parseInt(prompt("Enter a number to reverse"));
// num = reverseNumber(num);
// console.log(num);

// //function to count the number of vowels in a string

// function countVowels(str) {
//   let count = 0;
//   let vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// const word = prompt("Enter a word to count the number of vowels");
// countVowels(word);

// //function to check if a number is prime or not

// function isPrime(num) {
//   let isPrime = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log("The number is prime");
//   } else {
//     console.log("The number is not prime");
//   }
// }

// const number = parseInt(prompt("Enter a number to check if it is prime"));
// isPrime(number);

// //function to get the number of occurrences of each letter in a string

// function countLetters(str) {
//   let count = {};
//   for (let i = 0; i < str.length; i++) {
//     if (count[str[i]]) {
//       count[str[i]]++;
//     } else {
//       count[str[i]] = 1;
//     }
//   }
//   console.log(count);
// }

// const word1 = prompt("Enter a word to count the number of letters");
// countLetters(word1);

//ES6 version of the functions

//arrow function

const sum = (num1, num2) => {
  const result = num1 + num2;
  return result;
};
//function call
console.log(sum(5, 6));

//Default function

const pagination = (page = 1) => {
  return `Page number is ${page}`;
};

console.log(pagination(2));
console.log(pagination());

//write a function that says welcome person
//if user name is provided else it says welcome user

const welcome = (name = "User") => {
  return `Welcome ${name}`;
};

console.log(welcome("Abishkar"));
console.log(welcome());

//Parameterized Function

const users = ({ user1, user2, user3 }) => {
  return `${user1}, ${user2}, ${user3}`;
};

console.log(users({ user1: "K", user2: "A", user3: "I" }));

//write a paremeterized function to calculate the volume of cuboid

const volume = ({ length = 1, breadth = 1, height = 1 }) => {
  return length * breadth * height;
};

console.log(volume({ length: 5, breadth: 6, height: 7 }));
console.log(volume({ length: 5, breadth: 6 }));

//IIFEs function( Immediately Invoked Functional Expression)

((a = "Test") => {
  console.log("IIFE function called", a);
})(1);

//IIFE function to write the multiplication table of a number

((num = 1) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
})(8);
