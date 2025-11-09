import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Cover from './Cover'
import Home from './Home';
import Photo from './Photo';
import Video from './Video';
import Navigasi from './Navigasi';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route element={<Navigasi/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/video" element={<Video />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
