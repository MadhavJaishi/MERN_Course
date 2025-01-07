console.log("hi there before setTimeout");

function onDone() {
    console.log("hi there in setTimeout")
}

function onDone1() {
    console.log("hi there in setTimeout 1")
}
setTimeout(onDone, 3000);

let a = 1;
for(let i = 0; i < 1000000; i++) {
    a++;
}
console.log("hi there after setTimeout");

setTimeout(onDone1, 1000);

let b = 1;
for(let i = 0; i < 100000000; i++) {
    b++;
}
console.log("hi there after after setTimeout");
let x = 1000000;
while(x > 0) {
    x = x - 1;
}
console.log(x);