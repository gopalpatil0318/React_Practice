import React from 'react'

const Item = (props ) => {

    return (
        <>
           
            <p className='flex justify-center bg-cyan-500'>{props.name}</p>
            {props.children}
        </>
    )
}

export default Item