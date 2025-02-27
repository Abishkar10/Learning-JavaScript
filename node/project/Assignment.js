//QR Code
const QRCode = require("qrcode");

const url = "https://www.youtube.com/@RyuN100"; // Replace with your desired URL

QRCode.toString(url, { type: "terminal" }, (err, qr) => {
  if (err) {
    console.error("Error generating QR code:", err);
    return;
  }
  console.log(qr);
});

//Currency converter

const CurrencyConverter = require("currency-converter-lt");

async function testConversion() {
  let cc = new CurrencyConverter();
  let result = await cc.from("USD").to("EUR").amount(1).convert();
  console.log("Conversion Result:", result);
}

testConversion().catch(console.error);

const http = require("http");
const CurrencyConverter = require("currency-converter-lt");

const server = http.createServer(async (req, res) => {
  let cc = new CurrencyConverter();
  let result = await cc.from("USD").to("EUR").amount(1).convert();
  console.log(result);
  res.end(`1 USD = ${result} EUR`);
});

server.listen(8000);
console.log("Server running on http://localhost:8000");

//PDF generation

const fs = require("fs");
const PDFDocument = require("pdfkit");

const server1 = http.createServer((req, res) => {
  const doc = new PDFDocument();
  const filename = "output.pdf";

  res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename=${filename}`,
  });

  doc.pipe(res);

  doc.fontSize(20).text("Hello World!", 100, 100);

  doc.end();
});

server1.listen(8001);
console.log("Server running at http://localhost:8001");
