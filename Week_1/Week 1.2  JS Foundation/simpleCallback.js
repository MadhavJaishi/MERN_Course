function log1() {
    console.log("hello world 1");
}

function log2() {
    console.log("hello world 2");
}
// A function is passed to a function.
function display(fn) {
    fn();
}

display(log1);
display(log2);