// essentials
import "./App.css"
import React from "react"
import { Routes, Route } from "react-router-dom"

// components
import About from "./components/About"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
