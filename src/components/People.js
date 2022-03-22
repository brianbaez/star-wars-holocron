import React from "react";

function People(props) {
  return (
    <div className="container mt-3">
      {console.log("People", props.data)}

      <h1>People</h1>
    </div>
  );
}

export default People;
