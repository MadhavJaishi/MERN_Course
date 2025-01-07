const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.get("/interest", (req, res) => {
    const principal = req.query.p
    const rate = req.query.r
    const time = req.query.t
    let ans = (principal * rate * time) / 100
    res.json({
        total: parseInt(ans) + parseInt(principal),
        interest: ans
    })
})
app.listen(3000)