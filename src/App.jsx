import Navbar from "./components/Navbar";
import Hero from "./Hero";
import About from "./pages/About";

const App = () => {

  return (
    <>
    <div className="blue-bg min-h-screen">
      <Hero />
      <About/>
      <Navbar/>
    </div>
    </>
  );
};

export default App;
