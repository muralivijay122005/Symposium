import {useState} from "react";
import Hero from "./Hero";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
    <div className="blue-bg min-h-screen">
      <Hero />
    </div>
    </>
  );
};

export default App;
