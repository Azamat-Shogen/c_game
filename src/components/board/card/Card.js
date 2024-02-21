import React from 'react';
import './card.css'



const Card = ({ card }) => {
    return(
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1 mt-2">
            <div className={`card`} >
                <img src={card.source} className={`my-card ${card.selected ? "selected": ""}`} alt="card" />
            </div>
        </div>
    )
}

export default Card;