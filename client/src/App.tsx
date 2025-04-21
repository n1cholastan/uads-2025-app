import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';
import Sponsors from './pages/Sponsors';
import SpecificEventPage from './pages/SpecificEventPage';
import NavBar from './components/NavBar';
import './App.css'

function App() {

  return (
      <Router>
        <div className='flex flex-col bg-cream'>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<Home />} />
            <Route path="/events/:eventId" element={<SpecificEventPage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Footer/>
        </div>
      </Router> 
  )
}

export default App
