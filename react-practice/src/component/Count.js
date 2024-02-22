import React, { useState } from 'react'

function Count() {

    // let count = 0;

    // const incLove = () => {
    //     console.log("om")
    //     count++;
    // }

    const [count, setCount] = useState(0);

    const incLove = () => {
        setCount(count + 10);

    }


   

   


  return (
    <div className='loveCount'>
        <h2>❤️ Love Count ✨</h2>
        
        <h1> Count: { count } </h1>
        <button onClick={ incLove }>Inc Love 👉</button>
    </div>
  )
}

export default Count