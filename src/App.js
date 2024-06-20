// essentials
import "./App.css"
import React from "react"
import { Routes, Route } from "react-router-dom"

// components
import About from "./components/About"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

// dark theme
// import { ThemeProvider } from "@mui/material/styles"
import { createTheme } from "@mui/material/styles"
// import CssBaseline from "@mui/material/CssBaseline"

function App() {
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: "dark",
  //     primary: {
  //       main: "#90caf9",
  //     },
  //     secondary: {
  //       main: "#f48fb1",
  //     },
  //   },
  // })

  return (
    // <ThemeProvider theme={darkTheme}>
    //   <CssBaseline />
    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </div>
    // </ThemeProvider>
  )
}

export default App
