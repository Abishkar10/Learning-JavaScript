const bcrypt = require("bcryptjs");

const encryptpassword = (text = "password") => {
  const salt = bcrypt.genSaltSync(10);
  const hashedText = bcrypt.hashSync(text, salt);
  return hashedText;
};

const checkPassword = (encrpted = "", password = "") => {
  return bcrypt.compareSync(password, encrpted);
};

module.exports = { encryptpassword, checkPassword };
