// essentials
import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";

// components
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Welcome from './components/Welcome';

function App() {
  return (
    <div  className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App