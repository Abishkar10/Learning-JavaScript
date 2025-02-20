console.log("Object.js");

//Complex datatypes

const person = {};
const persons = new Object();
console.log(person, typeof person);

//create
const laptop = {
  brand: "apple",
  model: "macbook air",
  modelyear: "2024",
  age: function () {
    return 2025 - this.modelyear;
  },
  agenew: () => {
    return 2025 - this.modelyear;
  },
};

//read
console.log(laptop.brand);
console.log(laptop.age());

//update

laptop.brand = "dell";

console.log(laptop);

//delete
delete laptop.brand;
console.log(laptop);

//student data CRUD

const student = {
  name: "Tyson",
  address: "Brooklyn",
  roll_no: 1,
  age: 15,
  marks: 75,
};

console.log(student.name);
console.log(student.age);

student.marks = 80;
console.log(student.marks);

delete student.address;
console.log(student);

let product = {
  name: "headphones",
  price: 83.7,
};

const calcdiscount = (object) => {
  if (object.price > 100) {
    object.discount = 10;
  } else {
    object.discount = 7;
  }
};

let newproduct = calcdiscount(product);
console.log(newproduct);

const checkdiscount = (object) => {
  for (x in object) {
    if (x === discount) {
      console.log(`Already discounted by ${object.discount}%`);
    } else {
      console.log("The product has no discount");
      calcdiscount(object);
    }
  }
};

console.log(checkdiscount(product));
