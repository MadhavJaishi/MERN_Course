import { useCallback, useState, memo } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  // const a = function() {
  //   console.log("hello there")
  // }
  // Below code helps to not rerender Demo as when useCallback is not used, 
  // function is compared to its reference & function reference changes that causes rerender.
  const a = useCallback(function() {
    console.log("hello there")
  }, [])
  return (
    <>  
      <button onClick={function() {setCounter(counter+1)}}>Counter {counter}</button>
      <Demo a={a}/>
    </>
  )
}
const Demo = memo(function({a}) {
  console.log("hi")
  return <div>
    <button>button clicked</button>
  </div>
})

export default App
