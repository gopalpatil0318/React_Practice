import React from 'react'

const ItemDate = (props) => {
  return (
    <div className='flex justify-center bg-indigo-700 gap-6 mb-2'>
        <h1>{props.day}</h1>
        <h1>{props.month}</h1>
        <h1>{props.year}</h1>
    </div>
  )
}

export default ItemDate