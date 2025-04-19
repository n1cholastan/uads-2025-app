import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Footer from './components/Footer';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import './App.css'

function App() {

  return (
      <Router>
        <div className='flex flex-col bg-cream h-screen'>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<Home />} />
          </Routes>
          <Footer/>
        </div>
      </Router> 
  )
}

export default App
