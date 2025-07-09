import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./MainApp";
import CodeOfConduct from "./pages/CodeOfConduct";
import CustomCursor from "./components/CustomCursor";
import RegisterCards from "./pages/RegisterCards"; 


const App = () => {
  return (
    <Router>
      <CustomCursor />
      
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/codeofconduct" element={<CodeOfConduct />} />
          <Route path="/register" element={<RegisterCards />} />
        </Routes>
     
    </Router>
  );
};

export default App;
