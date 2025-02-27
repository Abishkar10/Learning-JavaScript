const countries = require("i18n-iso-countries");
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  const code = countries.alpha2ToAlpha3("NEPAL", "en");
});

server.listen(8003);
console.log("server is running in http://localhost:8003");
