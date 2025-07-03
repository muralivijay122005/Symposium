import React from 'react'
import Aurora from './components/Aurora';
import Navbar from './components/Navbar';

const Hero = () => {
  return (
    <>
    <div className="bg-blue-950 h-200">
      <Aurora
      
  colorStops={["#3A29FF", "#00FFFF"]}
  blend={7}
  amplitude={1}
  speed={0.5}
/>
    </div>
    <div className='font-modern-regular'>
      Text
    </div>
    <Navbar/>
    </>
  )
}

export default Hero