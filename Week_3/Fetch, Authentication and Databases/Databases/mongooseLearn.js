const mongoose = require("mongoose");
const express = require("express")
const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://admin:123@cluster0.604qb0k.mongodb.net/userappnew")

const User = mongoose.model('Users', 
    { 
        username: String, 
        email: String, 
        password: String 
    }
);
app.post("/signup", async (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    // here send user otp to verify if email is used by correct user
    // User.update User.delete
    const userExists = await User.findOne({email: email})
    if (userExists) {
        return res.status(400).send("User already exists")
    }
    const user = new User(
        { 
            username: username,  
            email: email, 
            password: password
        }
    );
    user.save().then(() => console.log('Your data is saved')).then(res.json({
        msg: "User created successfully."
    }))

})
app.listen(3000);
