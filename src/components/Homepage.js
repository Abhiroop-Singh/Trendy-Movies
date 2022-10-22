import React from 'react'
import { useState, useEffect } from 'react'
import style from '../Style/styles.css'
import MovieHeading from './MovieHeading'
import HeroSlider from './HeroSlider'
import MovieTrending from './MovieTrending'
import TopRateMovie from './TopRateMovie'
import TvTrending from './TvTrending'
import Footer from './Footer'
import Navbar from './Navbar'


function Homepage() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [heroComponentMovie, setHeroComponentMovie] = useState([]);
  const [popularTvShow, setPopularTvShows] = useState([]);

  // Get Popular Tv Shows
  const getPopularTvShow = async () => {
    const url = "https://api.themoviedb.org/3/tv/popular?api_key=58b1cda8f42c9d9f9f2d707739ee0c6c";
    try {
      const response = await fetch(url);
      const responsejs = await response.json();
      if (responsejs.results) {
        setPopularTvShows(responsejs.results.slice(0, 20));
      }
    }
    catch {
      console.log("error");
    }
  }

  // Get Top Rated Movies
  const getTopRatedMovie = async () => {
    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=58b1cda8f42c9d9f9f2d707739ee0c6c";
    try {
      const response = await fetch(url);
      const responsejs = await response.json();
      if (responsejs.results) {
        setTopRatedMovie(responsejs.results.slice(0, 20));
      }
    }
    catch {
      console.log("error");
    }
  }

  // Get popular movies
  const getPopularMovie = async () => {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=58b1cda8f42c9d9f9f2d707739ee0c6c";
    try {
      let response = await fetch(url);
      let responsejs = await response.json();
      if (responsejs.results.length>0) {
        let arr = [];
        arr.push(responsejs.results[7]);
        arr.push(responsejs.results[14]);
        arr.push(responsejs.results[19]);
        setHeroComponentMovie(arr);
        setPopularMovie(responsejs.results.slice(0, 20));
      }
    }
    catch {
      console.log("error");
    }
  }

  // Finding movies we searched for
  const getMovie = async (searchMovie) => {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=58b1cda8f42c9d9f9f2d707739ee0c6c&query=" + searchMovie;
    try {
      const res = await fetch(url);
      const responsejs = await res.json();
      console.log(responsejs);
      if (responsejs.results && !responsejs.errors) {
        setMovies(responsejs.results.slice(0, 10));
      }
    }
    catch {
      console.log("error");
    }
  }

  // UseEffect once the page loads
  useEffect(() => {
    getPopularMovie();
    getTopRatedMovie();
    getPopularTvShow();
  }, []);


  // We can useEffect everytime we search for movie
  useEffect(() => {
    if (searchMovie) {
      getMovie(searchMovie);
    }
  }, [searchMovie])


  return (
    <div style={{overflow:'hidden'}}>
      {
        window.scrollTo(0,0)
      }
      {/* This is Navbar section */}
      <Navbar />
      {/* This is hero slider carousel section*/}
      <HeroSlider heroComponentMovie={heroComponentMovie} />

      {/* This is for popular movies */}
      <MovieHeading heading="Trending Movies" />
      <MovieTrending popularMovie={popularMovie} />

      {/* For top rated movies */}
      <MovieHeading heading="Top Rated Movies" />
      <TopRateMovie topRatedMovie={topRatedMovie} />

      {/* This is for popular Tv Shows */}
      <MovieHeading heading="Trending Tv Shows" />
      <TvTrending popularTvShow={popularTvShow} />

      <Footer />

    </div>
  )
}

export default Homepage