import React, {useState, useEffect} from "react";
import Pagination from "./Pagination";
import Loader from "./Loader";

function Planets(props) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchPlanets() {
      let result = await fetch("https://swapi.dev/api/planets/?page=" + currentPage + "&format=json");
      let data = await result.json();
      setPlanets(data);
      setLoading(false);
    }

    fetchPlanets();
  }, [currentPage]);

  let numPages = Math.ceil(planets.count/10);

  let paginate = pageNumber => {
    setCurrentPage(pageNumber);
  }

  if(loading) {
    return(
      <Loader />
    );
  }

  return (
    <div className="container mt-3">
      {console.log("Planets", planets)}

      <h1>Planets</h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {planets.results?.map((planet, i) => {
            return (
              <div key={planet.name} className="col p-3">
                <div className="p-1" style={{border: "1px solid gray"}}>
                  <h5>{planet.name.toLowerCase()}</h5>

                  <div className="stats">
                    <p><strong>Population:</strong> {planet.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    <p><strong>Climate:</strong> {planet.climate}</p>
                    <p><strong>Terrain:</strong> {planet.terrain}</p>
                    <p><strong>Gravity:</strong> {planet.gravity}</p>
                    <p><strong>Rotation Period:</strong> {planet.rotation_period} hours</p>
                    <p><strong>Orbital Period:</strong> {planet.orbital_period} days</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Pagination numPages={numPages} paginate={paginate}/>
    </div>
  );
}

export default Planets;
