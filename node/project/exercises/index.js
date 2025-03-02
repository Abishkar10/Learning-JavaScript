const { encryptpassword, checkPassword } = require("./bcrypt.js");

const hash = encryptpassword("AbishkarJungShah");
console.log(hash);

const result = checkPassword(hash, "AbishkarJungShah");
console.log(result);
