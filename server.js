const express = require("express");
const res = require("express/lib/response");
const app = express();
const PORT = 3000;



//Routes

app.get("/greeting/:name", (req, res) => {
    let greeting = (req.params.name);
    console.log(req.params);
    if (greeting) {
        res.send("What's up, " + req.params.name + "!")
    } else {
        res.send("Hello, stranger") 
    }
 
});









app.listen(PORT, () => {
  console.log("Express is listening on port " + PORT);
});
