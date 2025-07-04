import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import About from "./pages/About";
import Tech from "./pages/Tech";
import Ntech from "./pages/Ntech";
import Workshop from "./pages/Workshop";
import Map from "./pages/Map";
import ClickSpark from './components/ClickSpark';
import CustomCursor from './components/CustomCursor';
import Coordinators from "./pages/Coordinators";

const App = () => {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const ntechRef = useRef(null);
  const workshopRef = useRef(null);
  const contactRef = useRef(null);


  return (
    <div className="bg-black min-h-screen relative">
      <CustomCursor />
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        
        <Hero />
        <About refProp={aboutRef} />
        <Tech refProp={techRef} />
        <Ntech refProp={ntechRef} />
        <Workshop refProp={workshopRef} />
        
        <Coordinators refProp={contactRef} />
        <Map/>
        <Navbar
          scrollToAbout={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
          scrollToTech={() => techRef.current?.scrollIntoView({ behavior: "smooth" })}
          scrollToNtech={() => ntechRef.current?.scrollIntoView({ behavior: "smooth" })}
          scrollToWorkshop={() => workshopRef.current?.scrollIntoView({ behavior: "smooth" })}
          scrollToContact={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
        />
      </ClickSpark>
    </div>
  );
};

export default App;
