// essentials
import "./App.css"
import React from "react"
import { Routes, Route } from "react-router-dom"

// components
import About from "./components/About"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

// dark theme
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  })

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
