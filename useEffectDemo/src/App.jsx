import { useEffect, useState } from 'react'

import './App.css'
import Item from './Components/Item'
import ItemDate from './Components/ItemDate'
import Card from './Components/Card';

function App() {

  const array = [
    {
      name: "Gopal",
      day: "18",
      month: "March",
      year: "2003",
    },
    {
      name: "piyush",
      day: "18",
      month: "jan",
      year: "2004",
    },
    {
      name: "Paresh",
      day: "16",
      month: "jun",
      year: "2003",
    },
  ];

  return (
    <>

     <Card/>


    </>
  )
}

export default App
