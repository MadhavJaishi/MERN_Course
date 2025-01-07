import { useEffect, useState } from 'react'

function useTodos() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get("https://gettodos")
    .then(function(res) {
      setTodos(res.data.todos)
    })
  })
  return todos
}
function App() {
  const todos = useTodos() // useTodo() is my custom hook
  return (
    <>
      {todos}
    </>
  )
}
export default App 