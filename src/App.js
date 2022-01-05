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
import Unrelated from './components/Unrelated';
import Messages from './components/Messages';


function App() {
  return (
    <div  className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/unrelated" element={<Unrelated/>}/>
        <Route path="/messages" element={<Messages/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App