import React, { useRef } from 'react'
import style from '../Style/hero.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import Modal from './Modal';
import { Link } from 'react-router-dom';

function HeroSlider(props) {

  const [clicked, setClicked] = React.useState(false);
  const [videourl, setVideoUrl] = React.useState("");

  return (
    <div className='carousel' >
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        grabCursor
        loop={true}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true
        // }}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper">

        {props.heroComponentMovie.map((movie) => {

          const handleClick = async () => {
            // Swiper.autoplay.stop();
            const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=58b1cda8f42c9d9f9f2d707739ee0c6c&language=en-US`;
            const response = await fetch(url);
            const responsejs = await response.json();
            const videosArray = await responsejs.results;
            console.log(responsejs.results);
            if (videosArray.length > 0) {
              console.log(videosArray);
              videosArray.map((video) => {
                if (video.type === 'Trailer') {
                  const videoUrl = "https://www.youtube.com/embed/" + video.key;
                  setVideoUrl(videoUrl);
                }
              })
            }
            else {
              setVideoUrl("No Trailer");
            }
            setClicked((prev) => !prev);
            console.log(videourl);
          };

          return (
            <div className='hero-slide'>
              <SwiperSlide>
                <div className='heroAllImages'>
                  <div className='hero-img'
                    style={
                      {
                        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
                      }
                    }>
                  </div>
                  <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} className='heroPosterImg' alt='heroPosterImg' />
                </div>

                <div className='heroContainerDetails'>

                  {/* {clicked && videourl === "No Trailer" && <span>No Trailer</span>} */}

                  {clicked && videourl !== "No Trailer" && <Modal videoUrl={videourl} setClicked={setClicked} />}

                  <h5 className='movieTitle'>{movie.title}</h5>
                  <br></br>
                  <div className='movieOverviewDiv'>
                    <p className='movieOverview'>{movie.overview}</p>
                  </div>
                  <div className='btns'>

                    <Link to={`/movie/${movie.id}`}
                      state={{ movies: movie }}
                      style={{ textDecoration: 'none' }}>

                      <button type="button" class="btn btn-danger btn-lg heroButton">
                        Watch now
                      </button>

                    </Link>

                    <button type="button" class="btn btn-outline-light btn-lg heroButton" onClick={handleClick}>
                      Watch trailer
                    </button>

                  </div>
                </div>
              </SwiperSlide>
            </div>
          )
        })}
      </Swiper >
    </div >
  )
}

export default HeroSlider