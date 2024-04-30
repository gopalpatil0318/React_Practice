import React, { useState } from 'react'



const form = () => {

  const [charr, setCharr] = useState("");

  function changeHandler(event) {
    // console.log(event.target.value);
    setCharr(event.target.value);
  }

  function submitHandler(event)
  {
    event.preventDefault();
    const data = {
      char:charr,
      nala:charr
    }
    console.log(data);
    setCharr('');
  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="" className='text-orange-400 text-2xl '>Check the value</label>
          <input type="text" placeholder='hi' className='bg-slate-600 m-10 rounded p-2 text-white' onChange={changeHandler} value={charr}></input>
        </div>
        <button type='submit'>Click Me</button>
      </form>
      <h1 className='bg-slate-600'>{charr}</h1>

    </div>

  )
}

export default form