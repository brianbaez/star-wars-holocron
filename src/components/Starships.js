import React from "react";

function Starships(props) {
  let data = props.data;
  let results = data.results;

  return (
    <div className="container mt-3">
      {console.log("Starships", props.data)}

      <h1>Starships</h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {results?.map((starship, i) => {
            return (
              <div key={starship.name} className="col p-3">
                <div className="p-1" style={{border: "1px solid gray"}}>
                  <h6>{starship.name.toLowerCase()}</h6>

                  <p>Model: {starship.model}</p>
                  <p>Cost: {starship.cost_in_credits} credits</p>
                  <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
                  <p>Length: {starship.length}</p>
                  <p>Max Speed: {starship.max_atmosphering_speed}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Starships;
