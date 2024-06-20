import React from 'react'
import './Spinner.css'
const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
        <div className='spinner'></div>
        <p className="text-slate-200 text-lg font-semibold">Loading....</p>
    </div>
  )
}

export default Spinner