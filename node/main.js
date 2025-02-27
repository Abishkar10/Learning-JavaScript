const { generateDescription } = require("./my-own");
const { calculateCuboidAread } = require("./abishkar");

const result = generateDescription("There are a lot of rain clouds today.");
const area = calculateCuboidAread(5, 6, 7);
console.log(result);
console.log(area);
