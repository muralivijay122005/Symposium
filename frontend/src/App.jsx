import React,{useState} from "react";
import Hero from "./Hero";
import SplashScreen from "./SplashScreen";
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <Hero />
      )}
    </>
  );
};

export default App;
