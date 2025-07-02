import React from "react";
import Background from "./assets/BG.jpg";
import Countdown from "./Countdown";
import Arrow from "./assets/Arrow-Rounded.svg";
import "./Hero.css";
import DecryptedText from "./components/DecryptedText";
import TiltedCard from "./components/TiltedCard";
const Hero = () => {
  return (
    <div className="background">
      <div className="relative w-full min-h-screen text-white flex flex-col items-center justify-start px-4 py-12 gap-8">

        {/* Main Title */}
        <p className="z-10 font-pexico text-cyan-500 text-center text-5xl">
          NOCTIVUS '25
        </p>

        {/* Countdown + Button */}
        <div className="z-10 flex flex-col items-center gap-4">
          <Countdown />
          <button className="pixel-btn relative flex items-center gap-2 font-pexico text-xl mt-4 px-6 py-3 pt-2 text-white ">
            Register Now
            <img src={Arrow} className="w-6 mt-1 rotate-270" />
          </button>
        </div>

        {/* Animated Text */}
        <div className="z-10 mt-10 text-center space-y-4">
          <DecryptedText
            text="This text animates when in view"
            animateOn="view"
            revealDirection="start"
            speed={100}
            sequential="true"
          />
          <br />
          <DecryptedText
            text="This text animates when in view"
            animateOn="view"
            revealDirection="start"
            speed={100}
            sequential="true"
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mt-12 mb-6">TECHNICAL EVENT</h1>
          <TiltedCard
            imageSrc={Background}
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Kendrick Lamar - GNX
              </p>
            }
          />
        </div>

        {/* Map */}
        <div className="z-10 mt-12 w-full flex justify-center">
          <iframe
            title="Velammal Engineering College"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4236.8364160551155!2d80.18907521102054!3d13.15001548659388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264a10c856599%3A0xac3348f41097ba7f!2sVelammal%20Engineering%20College!5e0!3m2!1sen!2sin!4v1751381868317!5m2!1sen!2sin"
            width="100%"
            height="350"
            className="rounded-xl w-full max-w-4xl border border-white/20 shadow-lg"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Hero;
