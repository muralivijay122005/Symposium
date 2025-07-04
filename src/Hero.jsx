import ShinyText from './components/ShinyText';
import Aurora from './components/Aurora';
import Countdown from './Countdown';
import {motion} from "framer-motion"
const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <Aurora
        colorStops={["#3A29FF", "#00FFFF"]}
        blend={7}
        amplitude={1}
        speed={0.5}
      />
<img
  src="/Logo.png"
  alt="Noctivus Logo"
  className="absolute left-1/2 transform -translate-x-1/2 top-0 w-100 z-100 mx-auto mix-blend-screen"
/>


      {/* NOCTIVUS Title */}
      <motion.div
        className="absolute top-85 w-full text-center text-white text-5xl font-funnel uppercase font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Noctivus '25
      </motion.div>

      {/* Shiny Button centered below title */}
      <button className="absolute top-150 left-1/2 transform -translate-x-1/2 px-7 py-4 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 pt-3 text-white font-funnel leading-none">
        <ShinyText
          text="REGSITER NOW"
          disabled={false}
          speed={5}
          className="text-2xl"
        />
      </button>

      <div className='absolute top-110 left-1/2 transform -translate-x-1/2'><Countdown /></div>

    </div>
  );
};

export default Hero;
