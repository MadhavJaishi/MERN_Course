import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(1)
  function changeCnt() {
    setCount(count + 1);
  }
  let findSum = useMemo(() => {
    let x = Number(inputValue);
    return ((x * (x + 1)) / 2);
  }, [inputValue])
  return (
    <>
      <input id="inp" type="number" onChange={function(e) {
        setInputValue(e.target.value)
      }}/>
      <div>
      Sum from 1 to {inputValue} is {findSum}
      </div>
      <button onClick={changeCnt}>Counter {count}</button>
    </>
  )
}
export default App