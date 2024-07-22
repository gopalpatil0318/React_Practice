import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Blogs = () => {

    const {posts,loading} = useContext(AppContext);
  return (

    <div>
        {
        loading ? (<Spinner/>):
        (posts.length === 0 ? 
            (<div>
                  <p>No Post Found</p>  
                </div>):
            (posts.map((post)=>(<Cards/>)))
            ) 
        }
    </div>
  )
}

export default Blogs