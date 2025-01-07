// Output : hi there
//          hi there 2
//          JavaScript is inherently single-threaded, meaning it can only do one thing 
//          at a time.

// Async 2
const fs = require("fs");

fs.readFile("a.text", "utf-8", function(err, data) {
    console.log(data);
});

console.log("hi there");

let a = 0;
for(let i = 0; i < 100000000; i++) {
    a++;
}
console.log("hi there 2");