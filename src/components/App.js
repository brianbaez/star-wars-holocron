import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import '../assets/styles/App.css';

import Navbar from "./Navbar";
import Loader from "./Loader";
import Home from "./Home";
import People from "./People";
import Starships from "./Starships";
import Vehicles from "./Vehicles";
import Species from "./Species";
import Planets from "./Planets";

function App() {
  const [people, setPeople] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [species, setSpecies] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let result = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await result.json();
      setPeople(data);
      setLoading(false);
    }

    async function fetchStarships() {
      let result = await fetch("https://swapi.dev/api/starships/?format=json");
      let data = await result.json();
      setStarships(data);
      setLoading(false);
    }

    async function fetchVehicles() {
      let result = await fetch("https://swapi.dev/api/vehicles/?format=json");
      let data = await result.json();
      setVehicles(data);
      setLoading(false);
    }

    async function fetchSpecies() {
      let result = await fetch("https://swapi.dev/api/species/?format=json");
      let data = await result.json();
      setSpecies(data);
      setLoading(false);
    }

    async function fetchPlanets() {
      let result = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await result.json();
      setPlanets(data);
      setLoading(false);
    }

    fetchPeople();
    fetchStarships();
    fetchVehicles();
    fetchSpecies();
    fetchPlanets();
  }, []);

  return (
      <Router>
        <div className="container-fluid p-0">
          <Navbar />

          {loading ? (<Loader />)
          : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<People data={people} />} />
              <Route path="/starships" element={<Starships data={starships} />} />
              <Route path="/vehicles" element={<Vehicles data={vehicles} />} />
              <Route path="/species" element={<Species data={species} />} />
              <Route path="/planets" element={<Planets data={planets} />} />
            </Routes>
          )}
        </div>
      </Router>
  );
}

export default App;
