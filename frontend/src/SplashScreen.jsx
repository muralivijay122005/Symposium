import React, { useEffect, useState } from "react";
import Logo from "./assets/pixel.png"; // replace with your logo

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // signal to hide splash screen
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#010922] flex flex-col items-center justify-center text-white animate-fadeOut z-50">
      <img src={Logo} alt="Logo" className="w-28 h-28 mb-4 animate-pulse" />
      <h1 className="text-4xl font-bold text-cyan-400 font-pexico">NOCTIVUS '25</h1>
    </div>
  );
};

export default SplashScreen;
