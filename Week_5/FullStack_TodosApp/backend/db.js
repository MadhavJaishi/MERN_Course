/* Todo = {
    title: string,
    description: string,
    completed: boolean
} */
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:123@cluster0.604qb0k.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todo", todoSchema)

module.exports = {
    todo
}