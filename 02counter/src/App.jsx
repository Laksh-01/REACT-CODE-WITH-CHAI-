import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=15
  
  const [counter,setcounter] = useState(1)
  const addvalue=()=>{
    setcounter((prevcounter)=>(prevcounter +1))
    setcounter((prevcounter)=>(prevcounter +1))
  }
  const removevalue=()=>{
    setcounter(counter-1)
  }
  return (
    <>
      <h1>react course {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}> add value</button> { }
      <button onClick={removevalue}> remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
