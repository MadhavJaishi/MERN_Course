const mongoose = require("mongoose")
const dotenv = require("dotenv")
mongoose.connect(process.env.URI);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    }, 
    password: {
        type: String, 
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String, 
        required: true,
    }
})
const User = new mongoose.Model("User", userSchema);
module.exports = {
    User,
}