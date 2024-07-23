import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pegination from '../components/Pegination'

const Home = () => {
  return (
    <div>
        <Header/>
        <div>
            <Blogs/>
            <Pegination/>
        </div>
    </div>
  )
}

export default Home