const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json())

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "Harkirat singh",
  },
  {
    username: "madhav@gmail.com",
    password: "123",
    name: "Madhav jaishi",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExists = false
  ALL_USERS.forEach((user) => {
    if (user.username == username && user.password == password) {
        userExists = true
    }
  })
  return userExists
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

// .sign(): This is a method provided by the jwt library to create a new JSON Web Token.
// { username: username }: This is the payload of the token. It's typically an object containing data that you want to encode into the token. In this case, it's { username: username }, which means it's encoding the username variable into the token.
// "shhhhh": This is the secret or private key used to sign the token. It's important for verifying the authenticity of the token later when it's decoded.
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
        users: ALL_USERS.filter((item) => {
            return item.username != username
        })
    })
});

app.listen(3000)