import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import LOGIN from "./Pages/LOGIN";
import USER from "./Pages/USER";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LOGIN />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<USER />} />
      </Routes>
    </Router>
  );
};

export default App;
