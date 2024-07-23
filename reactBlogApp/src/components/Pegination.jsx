import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pegination = () => {
  const {page,handlePageChange,totalPages} = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[670px] py-2'>
        <div className='flex gap-3'>
        {
          page >1 &&
          (<button  onClick={()=>handlePageChange(page-1)}
          className='border-2 px-4 py-1 rounded-md  '>
          Previous
        </button>)
          
        }
         {
          page < totalPages&&
         ( <button onClick={()=>handlePageChange(page+1)}
         className='border-2 px-4 py-1 rounded-md  '>
         Next
       </button>)
          
        }
        </div>

        <p className='font-bold text-xs'>
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pegination