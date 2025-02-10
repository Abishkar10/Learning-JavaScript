//conditional operators

//ES5
//if else
//switch case

//ES6
//ternary operator

//if(condition){ statement } else { statement }

// const gender = prompt("what is your gender? M or F");
// if (gender === "M") {
//   console.log("Male");
// } else {
//   console.log("Female");
// }

// const day = +prompt("Enter the day of the week in number");
// // console.log(day, typeof day);
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day");
// }

//write a program to grade the percentage of the student

const percentage = +prompt("Enter the percentage of the student");
console.log(percentage);
switch (true) {
  case percentage >= 80:
    console.log("Distinction");
    break;
  case percentage >= 70:
    console.log("First Division");
    break;
  case percentage >= 60:
    console.log("Second Division");
    break;
  case percentage >= 40:
    console.log("Third Division");
    break;
  case percentage < 40:
    console.log("Fail");
    break;
}
