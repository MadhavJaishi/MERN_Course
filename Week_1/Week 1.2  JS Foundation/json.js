const data = [
    {name: "madhav", age: 21},
    {name: "kunal", age: 26}
]
const dataStringify = JSON.stringify(data);
localStorage.setItem("data", dataStringify);

const accessData = JSON.parse(localStorage.getItem("data"));
console.log(accessData);