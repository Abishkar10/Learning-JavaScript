const events = require("events");

const eventEmitter = new events.EventEmitter();

const screamEvent = () => {
  console.log("I am Screaming");
};

const shoutEvent = () => {
  console.log("I am Shouting");
};

const mailEvent = () => {
  console.log("I am Sending Email");
};

const calculateTotalTax = (items) => {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const tax = totalPrice * 0.13;
  return tax;
};

eventEmitter.addListener("scream", screamEvent);
eventEmitter.addListener("shout", shoutEvent);
eventEmitter.addListener("mail", mailEvent);
eventEmitter.on("calcTax", (item) => {
  const tax = calculateTotalTax(item);
  console.log(`Tax: ${tax}`);
});

module.exports = { eventEmitter };
