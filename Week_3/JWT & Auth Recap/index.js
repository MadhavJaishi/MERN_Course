const jwt = require("jsonwebtoken")
const jwtPassword = "secret"
const content = {
    name: "Madhav Jaishi",
    accountNo: 53872080372
}
// var token = jwt.sign({ username: username }, jwtPassword);
const token = jwt.sign(content, jwtPassword)
console.log(token)

try {
    const verifiedValue = jwt.verify(token, jwtPassword)
    console.log(verifiedValue)
}
catch(error) {
    console.log("Wrong signature")
}