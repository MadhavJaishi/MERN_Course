function square(n) {
    return n * n;
}
function cube(n) {
    return n * n * n;
}
function quad(n) {
    return n * n * n * n;
}

function sumOfSmtg(a, b, fn) {
    let x = fn(a);
    let y = fn(b);
    return x + y;
}

console.log(sumOfSmtg(1, 2, quad));