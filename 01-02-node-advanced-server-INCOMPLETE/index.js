const http = require("http");
const { readFileSync, readFile } = require("fs");

// get all files
const homePage = readFileSync("./index.html");
const styles = readFileSync("./styles.css");
const image = readFileSync("./image.png");
const logic = readFileSync("./code.html");

const server = http.createServer((req, res) => {
  const url = req.url;
  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }

  // styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write("<h1>about page</h1>");
    res.end();
  }

  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
  }
  res.write("<h1>page not found</h1>");
  res.end();
});

// continue at 4 hours 45 minutes
// https://www.youtube.com/watch?v=Oe421EPjeBE
