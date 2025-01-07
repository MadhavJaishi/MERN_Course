const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
    data += " hello world";
    fs.writeFile("a.txt", data, function(err) {});
})