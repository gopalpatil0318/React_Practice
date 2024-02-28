import { useState, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenrator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str = "0123456789"
    if(character) str = "~!@#$%^&*{}[]-+*/`"

    for (let i = 1; i<= Array.length;i++)
    {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char) 
    }
    setPassword(pass)
  },[length,number,character,setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 my-8 text-orange-500 '>test</div>
    </>
  )
}

export default App
