import React, { useState, useEffect } from 'react'
import axios from 'axios'
function App3() {
    const [id, setId] = useState(4)
    function ChangeId(newId) {
        return ()=> {setId(newId)}
    }
    return <div>
        <button onClick={ChangeId(1)}>Click1</button>
        <h2>Hello World</h2>
        <button onClick={ChangeId(2)}>Click2</button>
        <button onClick={ChangeId(3)}>Click3</button>
        <button onClick={ChangeId(4)}>Click4</button>
        <Todo id={id}/>
    </div>
}

function Todo({id}) {
    const [todo, setTodo] = useState({})
    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then(response => {
            setTodo(response.data.todo)
        })
    }, [id])
    return <div>
        {id}
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  }
  export default App3