import React from "react";

function Vehicles(props) {
  return (
    <div className="container mt-3">
      {console.log("Vehicles", props.data)}
      
      <h1>vehicles</h1>
    </div>
  );
}

export default Vehicles;
