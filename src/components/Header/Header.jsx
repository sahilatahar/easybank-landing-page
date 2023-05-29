import React from 'react'
import './Header.css';

const Header = () => {
    return (
        // Header 
        <div className='Header'>
            {/* Header left section for texts */}
            <div className="left__panel">
                <h1 className="title">
                    Next generation digital banking
                </h1>
                <p className="description">
                    Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
                </p>
                <button className='invitation__btn'>Request Invite</button>
            </div>
            {/* Header Right section for Images */}
            <div className="right__panel"></div>
        </div>
    )
}

export default Header