import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let count = 15;

  const [value,setValue] = useState(0)

  const addValue =()=>{

    setValue(value+1)
  }

  const removeValue = ()=>{
    if(value>0){
    setValue(value-1)
  }
  }
  
  return (
    <>
      <h1>Gopal Patil</h1>
      <h2>Counter value: {value}</h2>
      <button 
        onClick={addValue}
      >Add Value</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
