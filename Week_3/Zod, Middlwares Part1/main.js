const express = require("express");
const app = express();


app.get('/health-checkup', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyNo = req.query.kidneyNo;

    if (username != "madhav" || password != "pass") {
        res.status(400).json({
            msg: "Something is wrong with your inputs 1"
        });
    }
    if (kidneyNo != 1 && kidneyNo != 2) {
        res.status(400).json({
            msg: "Something is wrong with your inputs 2"
        });
    }
    res.json({
        msg: "Your kidney is fine"
    });
});
app.listen(3000, () => {
    console.log("The app is running on port 3000");
});