const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//middlewares
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('<b>Hello World!</b>')
})
  
app.get("/route-handler", function(req, res) {
  //headers, body, query parameters
  res.json({
    "name" : "Madhav",
    "age" : 21
  })
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})