import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Experiance from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import { Toaster } from 'react-hot-toast'
// import Project from './components/Projects/Project'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        {/* <Project/> */}
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  )
}

export default App
