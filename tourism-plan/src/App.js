import React, { useState } from "react";
import data from "./data"
import Tours from "./Component/Tours";


const App = () => {
  const [tours,setTours] = useState(data);

  function removeTour(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }


  if(tours.length === 0)
  {
    return(
      <div className="refresh">
        <h2>No Tour Left</h2>
        <button className="btnWhite" onClick={() => setTours(data)}>
          refresh
        </button>

      </div>
    );
  }

  return (
    <div className="app">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )

};

export default App;
