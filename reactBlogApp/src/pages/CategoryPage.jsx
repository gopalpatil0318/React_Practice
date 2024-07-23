import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigation } from 'react-router-dom'
import Pegination from '../components/Pegination';

const CategoryPage = () => {

  const navigation = useNavigation();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header/>
      <div>
        <button
        onClick={()=>navigation(-1)}
        >
          Back
        </button>
        <h2>
          Blogs on<span>{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pegination/>
    </div>
  )
}

export default CategoryPage