import React from "react";

function Planets(props) {
  let data = props.data;
  let results = data.results;

  return (
    <div className="container mt-3">
      {console.log("Planets", props.data)}

      <h1>Planets</h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {results?.map((planet, i) => {
            return (
              <div key={planet.name} className="col p-3">
                <div className="p-1" style={{border: "1px solid gray"}}>
                  <h6>{planet.name.toLowerCase()}</h6>

                  <p>Population: {planet.population}</p>
                  <p>Climate: {planet.climate}</p>
                  <p>Terrain: {planet.terrain}</p>
                  <p>Gravity: {planet.gravity}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Planets;
