import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Contact from './pages/Contact'
import ActionsRealisees from './pages/ActionRealisees'
import Equipe from './pages/Equipe'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-roboto ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="ActionsRealisees" element={<ActionsRealisees/>}/>
          <Route path="/equipe" element={<Equipe/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App