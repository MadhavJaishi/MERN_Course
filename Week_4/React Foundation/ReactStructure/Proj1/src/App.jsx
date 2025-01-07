import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [x, seeChange] = useState(20)
  return (
    <div>
        <button onClick={() => setCount((Math.random() * 10).toFixed(0))}>
          count is {count}
        </button>
    </div>
  )
}
export default App
