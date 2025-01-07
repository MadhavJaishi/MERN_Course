const fs = require("fs");

// Ugly Way

// my own asynchronous function
// function read(cb) {
//     fs.readFile("a.text", "utf-8", (err, data) => {
//         cb(data);
//     });
// }

// // my callback fn to call
// function onDone(data) {
//     console.log(data);
// }

// read(onDone);


// Vs

function reads() {
    return new Promise(function(resolve, reject) {
        fs.readFile("a.text", "utf-8", (err, data) => {
            resolve(data);
            console.log("after resolve");
        });
    })
}

function onDone(data) {
    console.log(data);
}

// same as reads().then(onDone);
reads().then(onDone());

