import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Screens/Home";
import Countries from "./Screens/Countries";
import Classes from "./Screens/Classes";
import Students from "./Screens/Students";
import { AppContextProvider } from "./Contexts/AppContext";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AppContextProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/countries" element={<Countries />} exact />
            <Route path="/classes" element={<Classes />} exact />
            <Route path="/students" element={<Students />} exact />
          </Routes>
        </AppContextProvider>
      </Router>
    </div>
  );
}

export default App;
