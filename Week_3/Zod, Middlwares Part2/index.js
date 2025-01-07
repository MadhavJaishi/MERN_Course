const express = require("express")
const zod = require("zod")
const app = express()

const schema = zod.array(zod.number())

const schema2 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8).max(16),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})

app.use(express.json())

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    if (!response.success) {
        console.log(response.error)
        res.status(411).json({msg: "Your input is invalid."})
    } else {
        res.send({response})
    }
    
    // // kidneys = [1, 2]
    // const kidneys =  req.body.kidneys
    // const kidneyLength = kidneys.length

    // res.send("You have " + kidneyLength + " kidneys")
})

// // Global catches help you give the user a better error message
// // Error handling middleware uses 4 arguments as below
// app.use((err, req, res, next) => {
//     res.json({msg: "Something has gone wrong in our server. Sorry for your inconvenience."})
// })

app.listen(3000)