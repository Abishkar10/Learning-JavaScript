//String Manipulation (Pure Function)
//Closure Function
//Callback Function

//closure

const counter = () => {
  let count = 0;
  return () => count++;
};

const counterA = counter();
const counterB = counter();

console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());
console.log(counterB());

//lexical scoping => when a variable is defined in a function, it is accessible in the inner function but not accessible in the outer function

//callback function

const taxCal = (item) => 0.13 * item;

const cart = (items, callback) => {
  return callback(items);
};

console.log(cart(100, taxCal));

//pure function

const Datesimplify = (date) => {
  return date.split(" ")[0];
};

console.log(Datesimplify("2021-09-01 12:00:00"));
