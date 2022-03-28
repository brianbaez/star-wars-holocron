import React, {useState, useEffect} from "react";
import Pagination from "./Pagination";
import Loader from "./Loader";

function Species(props) {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchSpecies() {
      let result = await fetch("https://swapi.dev/api/species/?page=" + currentPage + "&format=json");
      let data = await result.json();
      setSpecies(data);
      setLoading(false);
    }

    fetchSpecies();
  }, [currentPage]);

  let numPages = Math.ceil(species.count/10);

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
      {console.log("Species", species)}

      <h1>Species</h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {species.results?.map((species, i) => {
            return (
              <div key={species.name} className="col p-3">
                <div className="p-1" style={{border: "1px solid gray"}}>
                  <h6>{species.name.toLowerCase()}</h6>

                  <p>Average Lifespan: {species.average_lifespan}</p>
                  <p>Average Height: {species.average_height}</p>
                  <p>Language: {species.language}</p>
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

export default Species;
