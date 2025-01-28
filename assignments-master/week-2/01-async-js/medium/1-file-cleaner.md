## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require("fs")
const filename = "abc.txt"
fs.readFile(filename, "utf-8", (err, data) => {
    console.log(data)
    let newData = ""
    for (let i = 0; i < data.length; i++) {
        if (data[i] != " ") {
            newData += data[i];
        }
    }
    fs.writeFile(filename, newData, (err, data){})
})