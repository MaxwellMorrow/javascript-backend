require("dotenv").config();
const express = require("express");
const app = express();

app.get("/employee/:id", (req, res) => {
  res.send("welcome to the home page");
});
app.post("/employee/:id", (req, res) => {
  res.send("welcome to the home page");
});
app.put("/employee/:id", (req, res) => {
  res.send("welcome to the home page");
});
app.patch("/employee/:id", (req, res) => {
  res.send("welcome to the home page");
});
app.delete("/employee/:id", (req, res) => {
  res.send("welcome to the home page");
});

app.listen(process.env.PORT, () => {
  res.send("listening at port" + process.env.PORT);
});
