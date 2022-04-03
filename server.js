const express = require("express");
const app = express();
const PORT = 3000;

//Routes

app.get("/greeting/:name", (req, res) => {
  res.send("Hello, stranger");
});
