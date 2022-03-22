import React from "react";

function People(props) {
  let data = props.data;
  let results = data.results;

  return (
    <div className="container mt-3">
      {console.log("People", data)}

      <h1>People</h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {results?.map((person, i) => {
            return (
              <div key={person.name} className="col p-3">
                <div className="p-1" style={{border: "1px solid gray"}}>
                  <h6>{person.name.toLowerCase()}</h6>

                  <p>Birth Year: {person.birth_year}</p>
                  <p>Gender: {person.gender}</p>
                  <p>Eye Color: {person.eye_color}</p>
                  <p>Height: {person.height}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default People;
