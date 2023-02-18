import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Banner from '../Banner/banner'
import About from '../About/about'
import Portfolio from '../Portfolio/portfolio'
import Contact from '../Contact/contact'
import Footer from '../Footer/footer'
import Skills from '../Skills/skills'
import Scroll from '../../Components/Scroll/scroll'
function home() {
  return (
    <div>
        <Navbar/>
        <Scroll/>
        <Banner/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default home