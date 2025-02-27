const properUpperCase = require("proper-upper-case");
const http = require("http");

// const ans = properUpperCase(
//   "it is raining today and will probably rain till the next week"
// );

// console.log(ans);

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
  });
  const answer = properUpperCase("abishkar jung shah");
  res.end(answer);
});

server.listen(8000);
console.log("Server is running at http://localhost:8000");

// Generate QR Code for the url on the terminal using package qrcode.

// Write a nodejs application to convert the currency from one currency
// to another using package: currency-converter-lt

// Write a nodejs application that can generate pdf using text and images.
// Use package: pdfkit
