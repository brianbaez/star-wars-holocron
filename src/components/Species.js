import React from "react";

function Species(props) {
  let data = props.data;
  let results = data.results;

  return (
    <div className="container mt-3">
      {console.log("Species", props.data)}

      <h1>Species</h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {results?.map((species, i) => {
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
    </div>
  );
}

export default Species;
