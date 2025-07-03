import ShinyText from './components/ShinyText';
import Aurora from './components/Aurora';
import Countdown from './Countdown';
import Navbar from './components/Navbar';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-blue-950 overflow-hidden">
      <Aurora
        colorStops={["#3A29FF", "#00FFFF"]}
        blend={7}
        amplitude={1}
        speed={0.5}
      />

      {/* NOCTIVUS Title */}
      <div className="absolute top-60 w-full text-center text-white text-5xl font-funnel">
        Noctivus '25
      </div>

      {/* Shiny Button centered below title */}
      <button className="absolute top-130 left-1/2 transform -translate-x-1/2 px-7 py-4 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 pt-3 text-white font-funnel leading-none">
        <ShinyText
          text="REGSITER NOW"
          disabled={false}
          speed={5}
          className="text-2xl"
        />
      </button>

      <div className='absolute top-90 left-1/2 transform -translate-x-1/2'><Countdown /></div>
      
    </div>
  );
};

export default Hero;
