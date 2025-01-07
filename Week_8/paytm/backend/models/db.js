const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, 
        lowercase: true,
        minLength: 3,
        maxLength: 40,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20,
    }, 
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 20,
    },
})
const User = model('User', userSchema);
module.exports = {
    User,
}