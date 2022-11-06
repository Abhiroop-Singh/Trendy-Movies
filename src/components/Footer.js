import React from "react";
import background from "../Images/footer-bg.jpg"
import { Link } from 'react-router-dom'
import style from "../Style/footer.css";

function Footer() {
    return (
        <div className="footer" style={
            { backgroundImage: `url(${background})` }
        }>
            <table>
                <tr>
                    <tc>
                        <td>
                            <div className="footer_logo">
                                <img src={require("../Images/icon.png")} className='icon-img' />
                                <span style={{ margin: '1rem' }}>MoviesNow</span>
                            </div>
                        </td>
                    </tc>
                </tr>
                <div className="footer-content">
                    <div className="footer-content-menu1">
                        <tr>
                            <tc>
                                <td>
                                    <Link to={'/'} style={{ textDecoration: 'none' }} className='footer-link'>Home</Link>
                                </td>
                            </tc>
                            <tc>
                                <td>
                                    <Link to={'/movie'} style={{ textDecoration: 'none' }} className='footer-link'>Movies</Link>
                                </td>
                            </tc>
                            <tc>
                                <td>
                                    <Link to={'/show'} style={{ textDecoration: 'none' }} className='footer-link'>TV Shows</Link>
                                </td>
                            </tc>
                        </tr>
                    </div>

                    <div className="footer-content-menu">
                        <tr>
                            <tc>
                                <td>
                                <Link to={'/'} style={{textDecoration: 'none' }} className='footer-link'>Contact Us</Link>
                                </td>
                            </tc>
                            <tc>
                                <td>
                                <Link to={'/'} style={{textDecoration: 'none' }} className='footer-link'>About Us</Link>
                                </td>
                            </tc>
                            <tc>
                                <td>
                                <Link to={'/'} style={{textDecoration: 'none' }} className='footer-link'>PrivacyPolicy</Link>
                                </td>
                            </tc>
                        </tr>
                    </div>
                </div>
            </table>
        </div>
    )
}

export default Footer;