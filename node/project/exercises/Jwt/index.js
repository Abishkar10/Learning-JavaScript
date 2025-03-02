const { generateToken, verifyToken } = require("./jwt.js");

const data = { name: "Abishkar Jung Shah", email: "abishkar@jungshah.com" };

const token = generateToken(data);

const result = verifyToken(token);
console.log(token);
console.log(result);
