import React from "react";

function Vehicles(props) {
  let data = props.data;
  let results = data.results;

  return (
    <div className="container mt-3">
      {console.log("Vehicles", props.data)}

      <h1>vehicles</h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {results?.map((vehicle, i) => {
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
    </div>
  );
}

export default Vehicles;
