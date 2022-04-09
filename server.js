const express = require("express");
const res = require("express/lib/response");
const app = express();
const PORT = 3000;

//Routes

//Greeting

//http://localhost:3000/greeting/Joan

// app.get("/greeting/:name", (req, res) => {
//   let greeting = req.params.name;
//   console.log(req.params);
//   if (greeting) {
//     res.send("What's up, " + req.params.name + "!");
//   } else {
//     res.send("Hello, stranger");
//   }
// });

//Tip Calculator

//http://localhost:3000/tip/100/20

// app.get("/tip/:total/:tipPercentage", (req, res) => {
//   // console.log(req.params);
//   let tipPercentage = req.params.tipPercentage / 100;
//   let tip = (req.params.total * (req.params.tipPercentage/100));
//   console.log(tipPercentage);
//   res.send(`Your tip will be $${parseInt(tip)}`);
// });




// Magic 8 Ball
//localhost:3000/magic/:question


//When user hits that route, asks a question, His question and the 8ball's response should show on the screen

//Get a RANDOM 8ball response

//Send the 8ball response back b/w <h1></h1> tags











