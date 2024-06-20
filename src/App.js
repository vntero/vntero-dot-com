// essentials
import "./App.css"
import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"

// components
import About from "./components/About"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

// dark theme
import { ThemeProvider } from "@mui/material/styles"
import { createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

function App() {
  // state to manage dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true)

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode)
  }

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "light" : "dark",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#f48fb1",
      },
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer
          toggleDarkMode={toggleDarkMode}
          toggleDarkTheme={toggleDarkTheme}
        />
      </div>
    </ThemeProvider>
  )
}

export default App
