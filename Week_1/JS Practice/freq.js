let str = "Hello World"

const obj = {}

for(let x of str) {
    if (obj[x]) {
        obj[x] += 1;
    } else {
        obj[x] = 1;
    }
}

console.log(obj);