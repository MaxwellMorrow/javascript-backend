require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/second", (req, res) => {
  res.send("my second page");
});

app.listen(process.env.PORT, () => {
  console.log("listening on port 3000");
});
