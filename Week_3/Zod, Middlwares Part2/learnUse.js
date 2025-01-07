const express = require("express")
const app = express()

app.use((req, res, next) => {
    console.log("Hi there")
    next()
})

// Before callback fn in this gets executed, above middleware is executed
app.get("/get", (req, res) => {
    console.log("Get 1")
    res.send("Get 1")
})

// Before callback fn in this gets executed, above middleware is again executed
app.get("/get2", (req, res) => {
    console.log("Get 2")
    res.send("Get 2")
})
app.listen(3000)