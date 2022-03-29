import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import '../assets/styles/App.css';

import Navbar from "./Navbar";
import Home from "./Home";
import People from "./People";
import Starships from "./Starships";
import Vehicles from "./Vehicles";
import Species from "./Species";
import Planets from "./Planets";

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container-fluid p-0">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/species" element={<Species />} />
            <Route path="/planets" element={<Planets />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
