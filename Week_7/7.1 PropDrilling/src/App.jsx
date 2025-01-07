// With context api:-
import { useContext, useState } from 'react'
import { CountContext } from './contextAPI'
function App() {
  const [count, setCount] = useState(0)
  //wrap anyone that wants to use teleported value inside a Provider
  return <div>
    <CountContext.Provider value={count}>
      <Count setCount={setCount}/>
    </CountContext.Provider>
  </div>
}
function Count({setCount}) {
  return <div>
    <Buttons setCount={setCount}/>
  </div>
}
function Buttons({setCount}) {
  const count = useContext(CountContext)
  return <div>
    <button onClick={() => setCount(count + 1)}>Increase Count</button>
    <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    <br /> <br />
    {count}
  </div>
}
export default App





// prop drilling is happening, Code Without context api:- 
// import { useState } from 'react'
// function App() {
//   const [count, setCount] = useState(0)
//   return <div>
//     <Count count={count} setCount={setCount}/>
//   </div>
// }
// function Count({count, setCount}) {
//   return <div>
//     <Buttons count={count} setCount={setCount}/>
//   </div>
// }
// function Buttons({count, setCount}) {
//   return <div>
//     <button onClick={() => setCount(count + 1)}>Increase Count</button>
//     <button onClick={() => setCount(count - 1)}>Decrease Count</button>
//     <br /> <br />
//     {count}
//   </div>
// }
// export default App