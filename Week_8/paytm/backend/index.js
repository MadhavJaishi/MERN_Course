const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;


app.get((req, res) => {

})

app.listen(port, () => {
    console.log("Server created succesfully on port ", port);
})


