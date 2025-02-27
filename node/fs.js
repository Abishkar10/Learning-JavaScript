// Write a node js function to read the content from the file and show it in the browser

const fs = require("fs");
const http = require("http");
const crypto = require("crypto");
const { cursorTo } = require("readline");
// const path = require("path");

// const server = http.createServer((req, res) => {
//   const filePath = path.join(__dirname, "text.txt");

//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end("Error reading file");
//     } else {
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end(data);
//     }
//   });
// });

// server.listen(8000, () => {
//   console.log("Server running on http://localhost:8000");
// });

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
  });
  const result = fs.readFileSync("./text.txt").toString();
  const OTP = crypto.randomInt(0, 1000000).toString().padStart(6, "0");
  res.end(
    `The contents of the file are as follows: ${result} \nThe generated OTP is ${OTP}`
  );
});

server.listen(8000);
console.log("server is running on http://localhost:8000");

//express server
//node modules
//node achitecture

//Write a function to generate an OTP of 6 digits

const generateOTP = (digits = 6) => {
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  const otp = crypto.randomInt(min, max).toString().padStart(6, "0");
  return otp;
};

console.log(generateOTP(6));
