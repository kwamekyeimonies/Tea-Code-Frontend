import React from 'react'
import Navbar from "./components/navbar/Navbar"
import Footer from "./containers/footer/Footer"
import Blog from "./containers/blog/Blog"
import Possibility from "./containers/possibility/Possibility"
import Features from "./containers/features/Features"
import Whatgpt3 from "./containers/whatGPT3/Whatgpt3"
import Header from "./containers/header/Header"
import CTA from "./components/cta/CTA"
import Brand from "./components/brand/Brand"
import "./App.css";



const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>

      <Brand  />
      <Whatgpt3 />
      <Features />
      <Possibility  />
      <CTA  />
      <Blog />
      <Footer />
    </div>
  )
}

//VLC --> 1:03 / 9:44:46

export default App