const express = require('express')
const app = express()
const port = 3000

// Middleware 1
app.use(express.static("public"));

// Middleware 2
app.use((req, res, next) => {
    console.log("m1");
    next();
})

// Middleware 3
app.use((req, res, next) => {
    console.log("m2");
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})