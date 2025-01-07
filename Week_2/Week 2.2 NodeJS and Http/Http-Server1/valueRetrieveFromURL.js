const express = require('express');
const app = express();
const port = 3001;

app.get('/x:value', (req, resp) => {
    const value = req.params.value;
    resp.send(`Value in the parameter is ${value}`);
});
app.listen(port, () => {
    console.log("Server Created!!")
});