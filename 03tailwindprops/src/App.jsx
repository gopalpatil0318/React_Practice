import { useState } from 'react'
import Card from './components/Card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let name = 'Gopal';
  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl m-5'>
        Tailwind
      </h1>
     
    <Card userName={name} btnText = 'Explore'/>

    </>
  )
}

export default App
