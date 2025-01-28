## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs")
const filename = "abc.txt"
fs.readFile(filename, "utf-8", (err, data) => {
    console.log(data)
    data += " I am adding this content to my existing file"
    fs.writeFile(filename, data, (err, data){})
})