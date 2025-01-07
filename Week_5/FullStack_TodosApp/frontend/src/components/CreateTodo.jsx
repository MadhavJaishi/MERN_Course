import { useState } from 'react'
export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={(e) => {
            setTitle(e.target.value)
        }} required/> <br />
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={(e) => {
            setDesc(e.target.value)
        }} required/> <br />
        <button style={{
            padding: 10,
            margin: 10
        }} onClick= {()  => {
            /* axios syntax
            axios.post("http://localhost:3000/todo", {
                title: title,
                description:  description
            }) .then() */
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json" 
                }
            })
            .then(async (res) => {
                const json = await res.json()
                alert(json.msg)
            })
        }}>Add Todo</button>
    </div>
}