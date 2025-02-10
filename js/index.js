console.log("Hello World!");

// var name = "John";
// name = "Jane"; // old ES5
// console.log(name);

// let person = "Tyson";
// person = "Max"; // allows override
// console.log(person);

// const man = "Kai"; // doesnt allow override
// console.log(man);

//////////////////////

// alert("Alert Example");

// confirm("Are you sure?");

// const user = prompt("What is your name?");
// console.log(user);

// const isStudent = prompt("Are you a student?");
// console.log(isStudent);

// const user = prompt("What is your name?");

// alert("Hello, " + user + " Welcome to the website!");

// alert(`Namaste, ${user} Welcome to the website!`);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      alert("Entered name: " + name);
    });
  } else {
    console.error("Form not found!");
  }
});
