import React, { useState } from "react";
import data from "./data"
import Tours from "./Component/Tours";


const App = () => {
  const [tours,setTours] = useState(data);

  function removeTour(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  return (
    <div>
     
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )

};

export default App;
