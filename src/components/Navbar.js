import React from 'react'
import icon from '../Images/icon.png'
import { Link } from 'react-router-dom'
import style from '../Style/navbar.css'

function Navbar() {
    return (
        <div className='navbar-container'>
            <nav class="navbar navbar-expand-lg header">
                <Link class="navbar-brand" to="/">
                    <img src={icon} width="50" height="50" class="d-inline-block align-top" alt="icon" />
                    <span className='navbar-title'>MoviesNow</span>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav navbar-item ml-auto">
                        <li class="nav-item" style={{textAlign:'center'}}>
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item" style={{textAlign:'center'}}>
                            <Link class="nav-link" to="/movie">Movies</Link>
                        </li>
                        <li class="nav-item" style={{textAlign:'center'}}>
                            <Link class="nav-link" to="/show">TvShow</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* <header>
                <a href='/' className='logo'>
                    <img src={icon} className='img-icon' />
                    MoviesNow
                </a>
                <ul className='navbar-item'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/movie'>Movies</a></li>
                    <li><a href='/shows'>Tv Shows</a></li>
                </ul>
            </header>
            <section className='banner'>
            </section> */}
            {
                window.addEventListener('scroll', function () {
                    var header = document.querySelector('nav');
                    header.classList.toggle('sticky', window.scrollY > 0);
                })
            }
        </div>
    )
}

export default Navbar