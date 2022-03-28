import React, {useState, useEffect} from "react";
import Pagination from "./Pagination";
import Loader from "./Loader";

function Vehicles(props) {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchVehicles() {
      let result = await fetch("https://swapi.dev/api/vehicles/?page=" + currentPage + "&format=json");
      let data = await result.json();
      setVehicles(data);
      setLoading(false);
    }

    fetchVehicles();
  }, [currentPage]);

  let numPages = Math.ceil(vehicles.count/10);

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
      {console.log("Vehicles", vehicles)}

      <h1>vehicles</h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {vehicles.results?.map((vehicle, i) => {
            return (
              <div key={vehicle.name} className="col p-3">
                <div className="p-1" style={{border: "1px solid gray"}}>
                  <h6>{vehicle.name.toLowerCase()}</h6>

                  <p>Model: {vehicle.model}</p>
                  <p>Cost: {vehicle.cost_in_credits} credits</p>
                  <p>Length: {vehicle.length}</p>
                  <p>Max Speed: {vehicle.max_atmosphering_speed}</p>
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

export default Vehicles;
