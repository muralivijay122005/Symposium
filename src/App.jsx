import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import About from "./pages/About";
import Tech from "./pages/Tech";
import Ntech from "./pages/Ntech";
import Home from "./pages/Home";

const App = () => {

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
    </div>
    </>
  );
};

export default App;
