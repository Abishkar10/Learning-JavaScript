const jwt = require("jsonwebtoken");

const generateToken = (data) => jwt.sign(data, "secret", { expiresIn: "10d" });

const verifyToken = (token) => jwt.verify(token, "secret");

module.exports = { generateToken, verifyToken };
