import React from 'react'
import './Features.css';
import iconOnline from '../../images/icon-online.svg';
import iconBudgeting from '../../images/icon-budgeting.svg';
import iconOnboarding from '../../images/icon-onboarding.svg';
import iconApi from '../../images/icon-api.svg';
import Card from '../Card/Card';

const Features = () => {

    const cardsData = [
        {
            img: iconOnline,
            title: 'Online Banking',
            description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },
        {
            img: iconBudgeting,
            title: "Simple Budgeting",
            description: 'See exactly where your money goes each month.Receive notifications when you’re close to hitting your limits.'
        },
        {
            img: iconOnboarding,
            title: 'Fast Onboarding',
            description: 'We don’t do branches.Open your account in minutes online and start taking control of your finances right away.'
        },
        {
            img: iconApi,
            title: 'Open API',
            description: 'Manage your savings, investments, pension, and much more from one account.Tracking your money has never been easier.'
        }
    ];

    return (
        // Features
        <div className='Features'>
            <h1 className='title'>Why choose Easybank?</h1>
            <p className="description">
                We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
            </p>
            {/* Cards to show available features */}
            <div className="feature__cards">
                {cardsData.map((cardData, index) => {
                    return <Card cardData={cardData} key={index} />
                })}
            </div>
        </div>
    )
}

export default Features