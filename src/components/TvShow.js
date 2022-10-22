import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import style from '../Style/movieLinkNav.css'
import { Link } from 'react-router-dom';

var totalPages=0;

function TvShow() {
  const [dayTvShow, setDayTvShow] = useState([]);
  const [page,setPage] = useState(2);

  const getDayTvShow = async () => {
    const tvshowUrl = "https://api.themoviedb.org/3/trending/tv/day?api_key=58b1cda8f42c9d9f9f2d707739ee0c6c";
    const res = await fetch(tvshowUrl);
    const resjs = await res.json();
    if (resjs.results.length > 0) {
      totalPages=resjs.total_pages;
      setDayTvShow(resjs.results);
    }
  }

  const loadMore = async()=>{
    setPage((page)=>page=page+1);
    const movieUrl = `https://api.themoviedb.org/3/trending/tv/day?api_key=58b1cda8f42c9d9f9f2d707739ee0c6c&page=${page}`;
    const res = await fetch(movieUrl);
    const resjs = await res.json();
    if (resjs.results.length > 0) {
      setDayTvShow([...dayTvShow,...resjs.results]);
    }
  }

  useEffect(() => {
    getDayTvShow();
  }, []);

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

  return (
    <>
      <Navbar />
    <div className='moviePage'>

    </div>
      <div className='movie-container'>
        <span className='page-heading'>Latest Trending Tv Shows</span>
        <div className='week-card-container'>
          {
            dayTvShow.map((show) => {
              return (
                <Link to={`/tv/${show.id}`}
                  state={{ show: show }}
                  style={{ textDecoration: 'none' }}>

                  <div className='week-card'>
                    <img src={"https://image.tmdb.org/t/p/w500" + show.poster_path} className='poster-img' />
                    <div className='week-card-content'>
                      <p style={{ margin: '0' }} className='show-title'>{show.name}</p>
                      <p style={{ margin: '0' }}
                        className={`tag-${setVote(show.vote_average)}`}>
                        {show.vote_average.toFixed(1)}
                      </p>
                    </div>
                  </div>

                </Link>
              )
            })
          }
        </div>
        {
          page<totalPages?(
            <button className='btn btn-primary btn-danger loadMore' onClick={loadMore}>Load More</button>
          ):null
        }
      </div>
    </>
  )
}

export default TvShow