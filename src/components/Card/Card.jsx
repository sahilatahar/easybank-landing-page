import React from 'react'
import './Card.css';

const Card = ({ cardData }) => {

    return (
        // Feature Card
        <div className='Card'>
            <img src={cardData.img} alt="Image" />
            <h1 className="title">{cardData.title}</h1>
            <p className="description">{cardData.description}</p>
        </div>
    )
}

export default Card;