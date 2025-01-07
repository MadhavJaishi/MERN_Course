import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([{
    title: "Go to gym", 
    description: "for the health purpose", 
    completed: false},
    { title: "Study DSA", 
    description: "from 9pm",
    completed: false
  }])

  function setTodosHandler() {
    setTodos([...todos, {
      title: "new todo",
      description: "description about new todo",
      completed: false
    }])
  }

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <br /> <br />
      
      <button style={{border: 10, padding: 10}} onClick={setTodosHandler}>Add todo</button>
      <CustomTodo todos={todos}></CustomTodo>
    </div>
  )
}
        //(props) then to use todos:- props.todos instead of just todos
function CustomTodo({todos}) {
  return <div>
      {todos.map((todo) => {
        return <div>
          <h1>{todo.title}</h1>
          <h1>{todo.description}</h1>
          <h1>{todo.completed.toString()}</h1>
          <br />
        </div> 
      })}
  </div>
}

function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return (
    <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  )
}

export default App
