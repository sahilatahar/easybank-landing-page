import React from 'react'
import './Articles.css'
import image1 from '../../images/image-currency.jpg';
import image2 from '../../images/image-restaurant.jpg';
import image3 from '../../images/image-plane.jpg';
import image4 from '../../images/image-confetti.jpg';
import ArticleCard from '../ArticleCard/ArticleCard';

const Articles = () => {

    // Article Data
    const articlesData = [
        {
            img: image1,
            title: 'Receive money in any currency with no fees',
            description: 'The world is getting smaller and we’re becoming more mobile.So why should you be forced to only receive money in a single …',
            writtenBy: 'By Claire Robinson'
        },
        {
            img: image2,
            title: 'Treat yourself without worrying about money',
            description: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.That means you …',
            writtenBy: 'By Wilson Hutton'
        },
        {
            img: image3,
            title: 'Take your Easybank card wherever you go',
            description: ' We want you to enjoy your travels.This is why we don’t charge any fees on purchases while you’re abroad.We’ll even show you …',
            writtenBy: 'By Wilson Hutton'
        },
        {
            img: image4,
            title: 'Our invite - only Beta accounts are now live!',
            description: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
            writtenBy: 'By Claire Robinson'
        },

    ];

    return (
        <div className='Articles'>
            <h1 className="title">Latest Articles</h1>
            <div className="article__cards">
                {articlesData.map((articleData, index) => <ArticleCard articleData={articleData} key={index} />)}
            </div>
        </div>
    )
}

export default Articles