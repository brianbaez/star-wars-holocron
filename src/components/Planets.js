import React from "react";

function Planets(props) {
  return (
    <div className="container mt-3">
      {console.log("Planets", props.data)}
      
      <h1>Planets</h1>
    </div>
  );
}

export default Planets;
