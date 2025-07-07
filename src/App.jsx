import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./MainApp";
import CodeOfConduct from "./pages/CodeOfConduct";
import CustomCursor from "./components/CustomCursor";
import ClickSpark from "./components/ClickSpark";

const App = () => {
  return (
    <Router>
      <CustomCursor />
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/codeofconduct" element={<CodeOfConduct />} />
        </Routes>
      </ClickSpark>
    </Router>
  );
};

export default App;
