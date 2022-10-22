import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import style from '../Style/details.css'
// For getting value of state when clicked
import { useLocation } from 'react-router-dom';

function Details() {

  const [genre, setGenre] = useState([]);
  const [cast, setCast] = useState([]);
  const [video, setVideo] = useState([]);

  const { state } = useLocation();

  window.scrollTo(0, 0);

  const getGenres = async () => {
    const genreUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=58b1cda8f42c9d9f9f2d707739ee0c6c&language=en-US";
    const res = await fetch(genreUrl);
    const resjson = await res.json();
    if (resjson.genres.length > 0) {
      setGenre(resjson.genres);
    }
  }

  const getCast = async () => {
    const castUrl = `https://api.themoviedb.org/3/movie/${state.movies.id}/credits?api_key=58b1cda8f42c9d9f9f2d707739ee0c6c&language=en-US`;
    const response = await fetch(castUrl);
    const responsejs = await response.json();
    if (responsejs.cast.length > 0) {
      setCast(responsejs.cast.slice(0, 5));
      console.log(cast);
    }
  }

  const getVideo = async () => {
    const videoUrl = `https://api.themoviedb.org/3/movie/${state.movies.id}/videos?api_key=58b1cda8f42c9d9f9f2d707739ee0c6c&language=en-US`;
    const response = await fetch(videoUrl);
    const responsejs = await response.json();
    if (responsejs.results.length > 0) {
      setVideo(responsejs.results.slice(0, 3));
    }
  };

  useEffect(() => {
    getGenres();
    getCast();
    getVideo();
  }, []);

  // console.log(video);

  return (
    <div className='detail-page'>
      <div className='detail-bg-img'
        style={
          {
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${state.movies.backdrop_path})`,
          }
        }>
      </div>
      <div className='detail-poster'>
        <img src={"https://image.tmdb.org/t/p/w500" + state.movies.poster_path} className='detail-poster-img' />
        <div className='movie-content-info'>
          <div className='title'>
            <span>{state.movies.title}</span>
          </div>
          <div className='genres'>
            {
              state.movies.genre_ids.map((category) => {
                {
                  let check = "";
                  genre.map((singleGenre) => {
                    if (singleGenre.id === category) {
                      check = singleGenre.name;
                    }
                  })
                  return (
                    <button className='btn-genre'>{check}</button>
                  )
                }
              })
            }
          </div>

          <p className='individual-overview'>{state.movies.overview}</p>
          <h4>Casts</h4>
          <div className="cast">
            {cast.map((actor) => {
              return (
                <div className="cast-card">
                  <img src={("https://image.tmdb.org/t/p/w500" + actor.profile_path)} className='actor-img' alt='image Unavailable' />
                  <p>{actor.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="videos">
        {
          video.map((trailer) => {
            return (
              <div className='trailer-container'>
                <span>{trailer.name}</span>
                <iframe src={"https://www.youtube.com/embed/" + trailer.key} width="100%" height='500' allowFullScreen className='individual-videos' title='video' />
              </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export default Details