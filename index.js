const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter is here");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login at play and code</h1>");
});
app.get("/play", (req, res) => {
  res.send("<h2>play and code</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
