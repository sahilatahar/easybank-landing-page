import React from 'react'
import './ArticleCard.css';

const ArticleCard = ({ articleData }) => {
    return (
        <div className='ArticleCard'>
            <div className="article__img">
                <img src={articleData.img} alt="article image" />
            </div>
            <div className="article__data">
                <p className="writer">{articleData.writtenBy}</p>
                <h2 className="title">{articleData.title}</h2>
                <p className="description">{articleData.description}</p>
            </div>
        </div>
    )
}

export default ArticleCard;