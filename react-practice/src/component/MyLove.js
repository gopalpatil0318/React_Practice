import React from 'react'

function MyLove({name, message, getName}) {


  return (
    <div className='box'>
            <h2>❤️ {name}</h2>
            <p>👉 {message}</p>
            <button onClick={()=> getName(name)}>✨</button>
    </div>
  )
}

export default MyLove


