//Logical operators

// AND
// OR
// NOT

//AND example
//condition 1 = true && condition 2 = true => true
//condition 1 = true && condition 2 = false => false
//condition 1 = false && condition 2 = true => false
//condition 1 = false && condition 2 = false => false

//OR example
//condition 1 = ture || condition 2 = true => true
//condition 1 = ture || condition 2 = false => true
//condition 1 = false || condition 2 = true => true
//condition 1 = false || condition 2 = false => false

//NOT example
//condition 1 = !true => false
//condition 1 = !false => true

const age = +prompt("Enter your age");
const dl = prompt("Do you have driving license? Y or N");

if (age >= 18 && dl === "Y") {
  console.log("You can drive");
} else {
  console.log("You can not drive");
}

const nagarita = prompt("Do you have nagarita? Y or N");
const voterid = prompt("Do you have voter id? Y or N");

if (nagarita === "Y" || voterid === "Y") {
  console.log("You can vote");
} else {
  console.log("You can not vote");
}

const user = prompt("Enter your name");
if (!user) {
  alert("User name is missing");
}
