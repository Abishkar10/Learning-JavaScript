//block of code that can be reused multiple times
// function myFunction() {
//   alert("My function is called");
// }

//function to add two numbers

// const a = +prompt("Enter first number");
// const b = +prompt("Enter second number");
// const c = 0;
// function sum(a, b) {
//   c = a + b;
//   console.log(c);
// }

//write a function to calculate the area of a circle

const pi = 3.14;

function areaOfCircle(r) {
  let area = pi * r * r;
  console.log(area);
}

const r = parseFloat(prompt("Enter the radius of the circle"));

areaOfCircle(r);
