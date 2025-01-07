import React, { useState, useEffect } from 'react'
import axios from 'axios'
function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(response => {
      setTodos(response.data.todos)
    })
  }, [])
  return <>
    {todos.map(todo => <Todo title={todo.title} description={todo.description}></Todo>)}
  </>
}
function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
  
}
export default App
