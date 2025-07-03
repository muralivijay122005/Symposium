import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import About from "./pages/About";
import Tech from "./pages/Tech";
import Ntech from "./pages/Ntech";
import Home from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Map from "./pages/Map.jsx";

const App = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000,       // animation duration (in ms)
    offset: 100,          // offset (in px) from the top of the screen
    easing: 'ease-out-cubic',
    once: false,           // whether animation should happen only once
  });
}, []);

  return (
    <>
    <div className="blue-bg min-h-screen">
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/techeve" element={<Tech/>}></Route>
        <Route path="/ntecheve" element={<Ntech/>}></Route>
        <Route path="/workshop" element={<Tech/>}></Route>
      </Routes>
      <Map/>
    </div>
    </>
  );
};

export default App;
