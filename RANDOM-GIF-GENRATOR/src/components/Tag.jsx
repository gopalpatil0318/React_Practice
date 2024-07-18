import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';





const Tag = () => {

  const [tag,setTag] = useState('');

  const {gif,loading,fetchData} = useGif(tag);



  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col 
    items-center gap-y-5 mt-[15px] mb-[30px]'>
      <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner/>):(<img src={gif} width={450}/>)
      }
     

      <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' 
      type="text" name="" id="" 
      value={tag}
      onChange={(event)=> setTag(event.target.value)}
      />

      <button onClick={() => fetchData()}
      className=' w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>
        
        Generate

      </button>

    </div>
  )
}

export default Tag