import Navbar from "./components/Navbar";
import Hero from "./Hero";
import About from "./pages/About";
import EventCards from "./pages/EventCards";
import Map from "./pages/Map";
import ClickSpark from './components/ClickSpark';

const App = () => {

  return (
    <>
    <div className="blue-bg min-h-screen">
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Hero />
        <About/>
        <Navbar/>
        <EventCards/>
        <Map/>
      </ClickSpark>
    </div>
    </>
  );
};

export default App;
