import React, {useState, useEffect} from "react";
import Pagination from "./Pagination";
import Loader from "./Loader";

function Starships(props) {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchStarships() {
      let result = await fetch("https://swapi.dev/api/starships/?page=" + currentPage + "&format=json");
      let data = await result.json();
      setStarships(data);
      setLoading(false);
    }

    fetchStarships();
  }, [currentPage]);

  let numPages = Math.ceil(starships.count/10);

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
      <h1>Starships</h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {starships.results?.map((starship, i) => {
            return (
              <div key={starship.name} className="col p-3">
                <div className="p-1" style={{border: "1px solid gray"}}>
                  <h5>{starship.name.toLowerCase()}</h5>

                  <div className="stats">
                    <p><strong>Model:</strong> {starship.model}</p>
                    <p><strong>Cost:</strong> {starship.cost_in_credits.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} credits</p>
                    <p><strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}</p>
                    <p><strong>Length:</strong> {starship.length} m</p>
                    <p><strong>Max Speed:</strong> {starship.max_atmosphering_speed} km/h</p>
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

export default Starships;
