const http = require("http");
const fs = require("fs");

const PORT = 4000;

const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res, next) => {
    if (req.url === "/") {
        return res.end(home);
    }
    if (req.url === "/about") {
        return res.end("<h1>This is About Page</h1>")
    }
    if (req.url === "/contact") {
        return res.end("<h1>This is Contact Page</h1>")
    }
    if (req.url === "/service") {
        return res.end("<h1>This is Service Page</h1>")
    }
})
server.listen(PORT, () => {
    console.log("Server created!!")
});