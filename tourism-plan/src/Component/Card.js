import react, { useCallback, useState } from "react";


function Card( ) {
    const [readmore,setReadmore] = useState(fals)


    function readmoreHandler() {

    }


    return (
        <div className="card">
            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="discription">
                    {dicription}
                    <span className="read-more" onclick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>
            <button className="button-red" onclick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    )
}

export default Card;