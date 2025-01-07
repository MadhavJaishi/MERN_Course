import { useState } from 'react'
import React from 'react'
import './App.css'
function App() {
  const [title, setTitle] = useState("madhav")
  
  function updateTitle() {
    setTitle(Math.random())
  }
  return (
    // <React.Fragment></React.Fragment> == <></>
    <>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title="hero"></Header>
      <Header title="hero"></Header>
      <Header title="hero"></Header>
      <Header title="hero"></Header>
    </>
  )
}
const Header = React.memo(function Header({title}) {
  return <div>
    <br />
      {title}
  </div>
})
export default App
