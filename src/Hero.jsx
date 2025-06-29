import React from "react";
import Background from "./assets/BG.jpg";
import Countdown from "./Countdown";
import Arrow from "./assets/Arrow-Rounded.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="relative bg-black w-full h-screen">
      {/* Background Image */}
      <img
        src={Background}
        alt="BG"
        className="absolute opacity-30 top-0 left-0 w-full h-full object-cover z-0"
      />
      <p className="relative font-pexico z-20 text-cyan-600 text-center text-5xl top-50">
        DEDSEC '25
      </p>

      {/* Overlay + Timer */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
        <Countdown />
        <button className="pixel-btn relative flex items-center gap-2 font-pexico text-xl mt-4 px-6 py-3 pt-2 text-white ">
          Register Now
          <img src={Arrow} className="w-6 mt-1 rotate-270" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
