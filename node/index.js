//1. Write a node js function to find the total memory of my PC
//2. Write a node js application to create a HTTP server to print hello world

const os = require("os");
const fs = require("fs");
const http = require("http");
const { listenerCount } = require("process");

const getMemory = () => os.totalmem() / (1024 * 1024 * 1024);
console.log(os.freemem());

console.log(getMemory());

const serverCreate = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello world!",
    })
  );
});

serverCreate.listen(8000);
console.log("Server is running on port 8000");
