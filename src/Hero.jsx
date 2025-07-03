import ShinyText from './components/ShinyText';
import Aurora from './components/Aurora';
import Countdown from './Countdown';

const Hero = () => {
  return (
    <div className="relative w-full h-70 bg-blue-950 overflow-hidden">
      <Aurora
        colorStops={["#3A29FF", "#00FFFF"]}
        blend={7}
        amplitude={1}
        speed={0.5}
      />

      {/* NOCTIVUS Title */}
      <div className="absolute top-20 w-full text-center text-white text-lg font-modern-bold">
        NOCTIVUS '25
      </div>

      {/* Shiny Button centered below title */}
      <button className="absolute top-28 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 pt-0.5 text-white font-modern leading-none">
        <ShinyText
          text="Register Now"
          disabled={false}
          speed={5}
          className="text-xs"
        />
      </button>

      <div className='absolute top-40 left-1/2 transform -translate-x-1/2'><Countdown /></div>

    </div>
  );
};

export default Hero;
