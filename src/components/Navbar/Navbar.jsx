import React, { useState, useEffect } from 'react'
import './Navbar.css';
import logo from '../../images/logo.svg';
import hamburgerIcon from '../../images/icon-hamburger.svg';
import closeIcon from '../../images/icon-close.svg';

export const Navbar = () => {

    // State to show nad hide navbar for small devices
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
        window.addEventListener('scroll', closeNavbar);
        // Clean up the event listener on component unmount
        return () => {
            window.addEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
            window.removeEventListener('scroll', closeNavbar);
        };
    }, []);

    const handleResize = () => {
        if (window.innerWidth <= 800) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
    };

    const closeNavbar = () => {
        setShowNavbar(false);
    }

    return (
        // Navbar
        <div className='Navbar'>
            {/* Navbar Logo */}
            <img src={logo} alt="logo" className='brand__logo' />
            {/* Navbar List */}
            <div className="dialog__bg" style={{ visibility: showNavbar ? 'visible' : 'hidden' }}>
                <ul className='nav__list'>
                    <li className="list__item">Home</li>
                    <li className="list__item">About</li>
                    <li className="list__item">Contact</li>
                    <li className="list__item">Blog</li>
                    <li className="list__item">Careers</li>
                </ul>
            </div>
            {/* Navbar Invitation Button */}
            <button className='invitation__btn'>Request Invite</button>
            {/* Hamburger Icon for small devices */}
            <div className="hamburger__icon" onClick={(e) => setShowNavbar(!showNavbar)}>
                <img src={showNavbar ? closeIcon : hamburgerIcon} alt="hamburger icon" />
            </div>
        </div >
    )
}
