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
                  <h5>{species.name.toLowerCase()}</h5>

                  <div className="stats">
                    <p><strong>Classification:</strong> {species.classification}</p>
                    <p><strong>Language:</strong> {species.language}</p>
                    <p><strong>Average Lifespan:</strong> {species.average_lifespan} years</p>
                    <p><strong>Average Height:</strong> {species.average_height} cm</p>
                    <p><strong>Skin Colors:</strong> {species.skin_colors}</p>
                    <p><strong>Eye Colors:</strong> {species.eye_colors}</p>
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

export default Species;
