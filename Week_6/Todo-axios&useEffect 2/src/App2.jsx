import React, { useState, useEffect } from 'react'
import axios from 'axios'
function App2() {
    const [id, setId] = useState(0)
    useEffect(() => {
        const temp = prompt("enter id: ")
        setId(temp)
    },[])
    return <div>
        <Todo id={id}/>
    </div>
}

function Todo({id}) {
    const [todo, setTodo] = useState({})
    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
        .then(response => {
            setTodo(response.data.todos)
        })
    }, [])
    return <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  }
  export default App2