import React from "react";
import background from "../Images/footer-bg.jpg"
import { Link } from 'react-router-dom'
import style from "../Style/footer.css";

function Footer() {
    return (
        <div className="footer" style={
            { backgroundImage: `url(${background})` }
        }>
            <div className="footer_logo">
                <img src={require("../Images/icon.png")} className='icon-img' />
                <span style={{ margin: '1rem' }}>MoviesNow</span>
            </div>
            <div className="footer-content">
                <div className="footer-content-menu">
                    <Link to={'/'} style={{ margin: '6rem', textDecoration: 'none' }} className='footer-link'>Home</Link>
                    <Link to={'/'} style={{ margin: '2rem', textDecoration: 'none' }} className='footer-link'>Live</Link>
                    <Link to={'/'} style={{ margin: '6rem', textDecoration: 'none' }} className='footer-link'>You must watch</Link>
                </div>
                <div className="footer-content-menu">
                    <Link to={'/'} style={{ margin: '4.3rem', textDecoration: 'none' }} className='footer-link'>Contact Us</Link>
                    <Link to={'/'} style={{ margin: '2rem', textDecoration: 'none' }} className='footer-link'>FAQ</Link>
                    <Link to={'/'} style={{ margin: '6rem', textDecoration: 'none' }} className='footer-link'>Recent release</Link>
                </div>
                <div className="footer-content-menu">
                    <Link to={'/'} style={{ marginRight: '2.6rem', textDecoration: 'none' }} className='footer-link'>Term of services</Link>
                    <Link to={'/'} style={{ marginLeft: '2rem', textDecoration: 'none' }} className='footer-link'>Premium</Link>
                    <Link to={'/'} style={{ margin: '6rem', textDecoration: 'none' }} className='footer-link'>Top IMDB</Link>
                </div>
                <div className="footer-content-menu">
                    <Link to={'/'} style={{ textDecoration: 'none' }} className='footer-link'>About Us</Link>
                    <Link to={'/'} style={{ marginLeft: '8rem', textDecoration: 'none' }} className='footer-link'>Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;