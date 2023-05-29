import React from 'react'
import './Footer.css';
import logo from '../../images/logo-white.svg';
import fbIcon from '../../images/icon-facebook.svg';
import ytIcon from '../../images/icon-youtube.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import pintIcon from '../../images/icon-pinterest.svg';
import instaIcon from '../../images/icon-instagram.svg';

const Footer = () => {
    return (
        <>
            <div className='Footer'>
                <div>
                    <img src={logo} alt="logo" />
                    <div className="icons">
                        <img src={fbIcon} alt="facebook icon" className="icon" />
                        <img src={ytIcon} alt="youtube icon" className="icon" />
                        <img src={twitterIcon} alt="twitter icon" className="icon" />
                        <img src={pintIcon} alt="pinterest icon" className="icon" />
                        <img src={instaIcon} alt="instagram icon" className="icon" />
                    </div>
                </div>
                <div>
                    <ul className='footer__list'>
                        <li className="footer__list__item">About Us</li>
                        <li className="footer__list__item">Contact</li>
                        <li className="footer__list__item">Blog</li>
                    </ul>
                </div>
                <div>
                    <ul className='footer__list'>
                        <li className="footer__list__item">Careers</li>
                        <li className="footer__list__item">Support</li>
                        <li className="footer__list__item">Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <ul className='footer__list'>
                        <li className='footer__list__item'>
                            <button className='invitation__btn'>Request Invite</button>
                        </li>
                        <li className='footer__list__item'>
                            <p className="copyright__para">© Easybank. All Rights Reserved</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://github.com/sahilatahar" target='_blank'>Sahil Atahar</a>.
            </div>
        </>

    )
}

export default Footer