import React from 'react'
import Card from './Card';

const Testinomial = (props) => {
    let reviews = props.reviews;
  return (
    <div>
        <Card review ={ reviews[0]}></Card>
    </div>
  )
}

export default Testinomial