import React from 'react'
import Hero from '../Hero'
import About from './About'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        {/* <Navbar/> */}
    </div>
  )
}

export default Home