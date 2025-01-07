import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { DisplayTodos } from './components/DisplayTodos'

function App() {
  const [todos, setTodos] = useState([])
  
  fetch("http://localhost:3000/todos").then(async (res) => {
    const json = await res.json()
    setTodos(json.todos)
  })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <DisplayTodos todos = {todos}></DisplayTodos>
    </div>
  )
}

export default App
