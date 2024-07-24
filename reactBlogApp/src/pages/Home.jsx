import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pegination from '../components/Pegination'

const Home = () => {
  return (
    <div className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white'>
      <Header />
      <div>
        <Blogs />
        <Pegination />
      </div>
    </div>
  )
}

export default Home