const { eventEmitter } = require("./scream");

eventEmitter.emit("scream");
eventEmitter.emit("shout");
eventEmitter.emit("mail");

// Suppose there are two people both people put items in the cart, one electronics and other baby products
const persona = [
  { name: "iphone", price: 100 },
  { name: "earpods", price: 50 },
];
const personb = [
  { name: "babyformula", price: 500 },
  { name: "daiper", price: 200 },
];

//send person of each data from emit using data to calculate tax where it is 13%

eventEmitter.emit("calcTax", persona);
eventEmitter.emit("calcTax", personb);

//API
//REST API

//Types of API
//1. GraphQL
//2. gRPC
//3. tRPC
//4. Event Driven (Microservices)
