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
  res.send(`the query parameter is:  ${req.params.animal}`);
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

// NOTES:
// 1. in your terminal, type in "node index.js" or "nodemon index.js"
// 2. then, in your browser, try the following url's
//    http://localhost:3000/animal/bird
//    http://localhost:3000/animal/cat
//    http://localhost:3000/animal/dog
