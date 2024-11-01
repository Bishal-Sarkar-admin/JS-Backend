const express = require("express");
require("dotenv").config();
const app = express();

const Bio = '{"name":"Bishal", "age":22, "car":null}';
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/Youtube", (req, res) => {
  res.send("<h2>Youtube video.......public........</h2>");
});
app.get("/Bio", (req, res) => {
  res.json(JSON.parse(Bio));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
