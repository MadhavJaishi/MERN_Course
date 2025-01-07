const express = require("express");
const app = express();
var users = [{
    name: "madhav",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }, {
        healthy: true
    }]
}];

// This line allows us to catch any 'post request' body we give through postman in this page
app.use(express.json());

app.get("/", (req, res) => {
    const myKidneys = users[0].kidneys;
    const numberOfKidneys = myKidneys.length;
    const numberOfHealtyKidneys = myKidneys.filter((x) => x.healthy == true).length;
    res.json({myKidneys, numberOfKidneys, numberOfHealtyKidneys});
})

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({msg:"Done"});
});

app.put("/", (req, res) => {
    users[0].kidneys.map((x) => x.healthy = true);
    res.json({});
})

app.delete("/", (req, res) => {
    if (checkIfUnhealthyKidneyExist()) {
        users[0].kidneys = users[0].kidneys.filter(x => {
            return x.healthy === true;
        });
        res.json({});
    } else {
        res.status(411).send({
            msg: "You don't have any unhealthy kidney to delete."
        })
    }
})
function checkIfUnhealthyKidneyExist() {
    let ans = users[0].kidneys.filter(x => {
        return x.healthy === false;
    });
    return ans.length;
}
app.listen(3000);







// function calculateSum(n) {
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         ans += i;
//     }
//     return ans;
// }
// app.get("/", (req, res) => {
//     // give localhost:3000?n=3 
//     // if want to give more params then ?n=3&a=2&b=0
//     const n = req.query.n;
//     const ans = calculateSum(n);
//     res.send("Your answer is " + ans.toString());
// });