require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to the home page");
});

app.get("/two", (req, res) => {
  res.send("welcome to page 2");
});

// query parameter
app.get("/animal/:animal", (req, res) => {
  let animal = req.params.animal;
  res.send(`the query parameter is: ${animal}`);
});

// query string
// localhost:3000/math?number=5
app.get("/math", (req, res) => {
  const number = req.query.number;
  res.send(`<p>Your query string is: ${number}</p>`);
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

// NOTES:
// 1. in your terminal, type in "node index.js" or "nodemon index.js"
// 2. then, in your browser, try the following url's
//    http://localhost:3000/math?number=5
//    http://localhost:3000/math?number=100
