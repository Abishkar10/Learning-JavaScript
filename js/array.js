// Write a program to sum values of an array.

// Write a program to remove a specific element from an array.

// Write a program to find the maximum and minimum value of an array

// Write a program to reverse an array of integer values.

// Write a program to find the second largest element in an array.

// Write a Java program to find the sum of the two elements of a given array equal to a given integer. Eg: Sample array: [1,2,4,5,6] Target value: 6.

// Write a function that converts an array of values from miles to kilometres using the map method. In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable.

// Square and sum the array elements using the arrow function and then find the average of the array.

// Create a new array whose elements is in uppercase of words present in the original array.

// Write a function Myfunc that takes in an array of numbers and multiply each of the elements by 2.

// let food = ['Noodle', 'Pasta', 'Ice-cream'];
// let food = ['Fries', 'Ice-cream', 'Pizza'];
// Compare the 2 arrays and find common food if any.

const player = [
  {
    name: "Ronaldo",
    age: "40",
    country: "Portugal",
    club: "Al Nassr",
  },
  {
    name: "Messi",
    age: "38",
    country: "Argentina",
    club: "Inter Miami",
  },
  {
    name: "Neymar",
    age: "33",
    country: "Brazil",
    club: "Santos FC",
  },
  {
    name: "Mbappe",
    age: "26",
    country: "France",
    club: "Real Madrid",
  },
];

//1//

const sumofages = player.reduce((acc, player) => acc + parseInt(player.age), 0);
console.log(sumofages);

//2//
const southamericans = player.filter(
  (player) => player.country === "Brazil" || player.country === "Argentina"
);
console.log(southamericans.map((player) => player.name));

//3//
const maxage = player.reduce(
  (acc, player) => Math.max(acc, parseInt(player.age)),
  0
);
console.log(maxage);

const minage = player.reduce(
  (acc, player) => Math.min(acc, parseInt(player.age)),
  100
);
console.log(minage);

//4//
const reverse = player.reverse();
console.log(reverse);

//5//
const secondoldest = player.sort((a, b) => b.age - a.age)[1];
console.log(secondoldest);

//6         