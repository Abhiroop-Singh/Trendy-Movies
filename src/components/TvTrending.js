import React from 'react'
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

function TvTrending(props) {

  //To reverse the release dates
  function reverseString(str) {
    const arr = str.split("");
    const joinArray = arr[8] + arr[9] + arr[7] + arr[5] + arr[6] + arr[4] + arr[0] + arr[1] + arr[2] + arr[3];
    return joinArray;
  }

  return (
    <>
      <Swiper
        slidesPerView={5.4}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          240:{
            slidesPerView:2.2,
            spaceBetween:0
          },
          768:{
            slidesPerView:4,
            spaceBetween:0
          },
          1024:{
            slidesPerView:5.4,
            spaceBetween:0
          }
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {props.popularTvShow.map((show) => {
          return (
            <SwiperSlide>
              <Link to={`/tv/${show.id}`}
                state={{ show: show }}
                style={{textDecoration:'none'}} >
                <div className='cards' key={show.id}>
                  <img src={"https://image.tmdb.org/t/p/w500" + show.poster_path} className='poster-img' />
                  <div className='movie-overview'>
                    <div className='movie-title-mainpage'>
                      <span>{show.name}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default TvTrending