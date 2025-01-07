function calculate(arithmetic, ...c) {
    const ans = arithmetic(...c);
    return ans;
}
function sum(a, b) {
    return a + b;
}
function mul(a, b, c){
    return a * b * c;
}
const value1 = calculate(sum, 1, 2);
console.log(value1);
    
const value2 = calculate(mul, 1, 2, 3);
console.log(value2)