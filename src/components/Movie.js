import React from 'react'
import Navbar from './Navbar'
import style from '../Style/movieLinkNav.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

var totalPages = 0;

function Movie() {

  const [weekTrending, setWeekTrending] = useState([]);
  const [page, setPage] = useState(2);

  // getting daily trending movies
  const getWeeklyTrendingMovie = async () => {
    // Can be changed either to day or week 
    const movieUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=58b1cda8f42c9d9f9f2d707739ee0c6c&page=1`;
    const res = await fetch(movieUrl);
    const resjs = await res.json();
    if (resjs.results.length > 0) {
      totalPages = resjs.total_pages;
      setWeekTrending(resjs.results);
    }
  }

  const loadMore = async () => {
    setPage((page) => page = page + 1);
    const movieUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=58b1cda8f42c9d9f9f2d707739ee0c6c&page=${page}`;
    const res = await fetch(movieUrl);
    const resjs = await res.json();
    if (resjs.results.length > 0) {
      setWeekTrending([...weekTrending, ...resjs.results]);
      console.log(resjs.results);
    }
  }

  // Setting colour according to vote of movie
  const setVote = (vote) => {
    if (vote >= 8) {
      return 'green'
    }
    else if (vote >= 6) {
      return 'orange'
    }
    else {
      return 'red';
    }
  }

  useEffect(() => {
    getWeeklyTrendingMovie();
  }, []);

  return (
    <>
      <Navbar />
      <div className='moviePage'>
        
      </div>
      <div className='movie-container'>
        <span className='page-heading'>Latest Trending Movies</span>
        <div className='week-card-container'>
          {
            weekTrending.map((movie) => {
              return (
                <Link to={`/movie/${movie.id}`}
                  state={{ movies: movie }}
                  style={{ textDecoration: 'none' }}>

                  <div className='week-card'>
                    <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} className='poster-img' alt='poster-img' />
                    <div className='week-card-content'>
                      <p style={{ margin: '0' }} className='movie-title'>{movie.title}</p>
                      <p style={{ margin: '0' }}
                        className={`tag-${setVote(movie.vote_average)}`}>
                        {movie.vote_average.toFixed(1)}
                      </p>
                    </div>
                  </div>

                </Link>
              )
            })
          }
        </div>
        {
          page < totalPages ? (
            <button className='btn btn-primary btn-danger loadMore' onClick={loadMore}>Load More</button>
          ) : null
        }
      </div>
    </>
  )
}

export default Movie