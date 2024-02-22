import React, { useState } from 'react'

function LovePromises() {

    

    const lovePromises = ['Gift', 'Chocolate', 'Kiss'];

    const [promises, setPromises] = useState(lovePromises)
    const [name, setName] = useState('')

   

    const addPromise = () => {
        setPromises([...promises, name])
        setName('')
    }


  return (
    <div className='lovePromises'>
      <h1>Promises List ❤️</h1>
        <ul>
            {
                promises.map((promise) => {
                    if(promise != ''){
                        return(
                            <li>🎀 {promise}</li>
                        )
                    }
                    
                })
            }
          
        </ul>
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)}  placeholder='Enter Promise' />
        <button onClick={ addPromise }>Add 👉</button>
      </div>    
  )
}

export default LovePromises