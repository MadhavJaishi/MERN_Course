import { useState, useEffect } from 'react'
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTimeout(async () => {
      const myTodos = await fetch("https://sum-server.100xdevs.com/todos");
      const resp = await myTodos.json();
      setTodos(resp.todos);
    }, 3000)
  }, [])

  return <div> 
    {todos.map((todo, id) => {
      return <div key={id}>
        {todo.title} <br />
        {todo.description} <br />
        {todo.completed.toString()}
      </div>
    })}
  </div>
}
export default App
