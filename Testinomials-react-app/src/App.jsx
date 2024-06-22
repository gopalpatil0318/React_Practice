import { useState } from 'react'
import reviews from "./data"
import Testinomial from "./components/Testinomial"


function App() {
  

  return (
    <>
     <div className=''>
      <div>
        <h1>Our Testinomials</h1>
        <div></div>
        <Testinomial reviews={reviews}/>
      </div>
     </div>
    </>
  )
}

export default App
