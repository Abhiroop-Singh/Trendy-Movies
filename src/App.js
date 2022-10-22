import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './components/Details'
import DetailsTv from './components/DetailsTv'
import Homepage from './components/Homepage'
import Movie from './components/Movie'
import TvShow from './components/TvShow'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/show' element={<TvShow />} />
        <Route path='/movie/:id' element={<Details/>} />
        <Route path='/tv/:id' element={<DetailsTv />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App