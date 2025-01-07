// Output : 
// hello
// hi, good afternoon my old friend. 
// Since hello is logged before, it becomes async
// Some other async functions js provides are : fs.readFile and fetch

// Async 1
function greet() {
    console.log("hi, good afternoon my old friend.");
}

setTimeout(greet, 3000);
console.log("hello");

