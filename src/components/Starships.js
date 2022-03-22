import React from "react";

function Starships(props) {
  return (
    <div className="container mt-3">
      {console.log("Starships", props.data)}

      <h1>Starships</h1>
    </div>
  );
}

export default Starships;
