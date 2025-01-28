const express = require("express");
const app = express();
require("dotenv").config();
const rootRouter = require("./routes/index")
const port = process.env.PORT;
app.use("/api/v1",rootRouter);


app.listen(port, () => {
    console.log("Server created succesfully on port ", port);
})


