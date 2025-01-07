const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db")
const app = express()
const cors = require("cors")
const port = 3000;


app.use(express.json())
app.use(cors())
app.get("/todos", async (req, res) => {
    const todos = await todo.find({});
    res.status(201).json({
        todos
    })

})
app.post("/todo", async (req, res) => {
    const todoPayload = req.body;
    const parsedPayload = createTodo.safeParse(todoPayload);
    if (!parsedPayload.success) {
        res.status(500).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: todoPayload.title,
        description: todoPayload.description,
        completed: false
    })
    res.status(201).json({
        msg: "Todo created."
    })

})
app.put("completed/", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(500).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})
app.listen(port, () => {
    console.log(`The server is running at port ${port}`)
})