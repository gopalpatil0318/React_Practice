import React from 'react'



const Tours = ({tours,removeTour}) => {
  return (
    <div>
        <h2>Plan With Love</h2>

        <div>
            {
                tours.map((tour)=>{
                    return <Card {...tour} removeTour={removeTour}></Card>
                })
            }
        </div>

    </div>
  )
}

export default Tours