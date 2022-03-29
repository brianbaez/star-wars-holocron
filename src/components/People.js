import React, {useState, useEffect} from "react";
import Pagination from "./Pagination";
import Loader from "./Loader";

function People() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchPeople() {
      let result = await fetch("https://swapi.dev/api/people/?page=" + currentPage + "&format=json");
      let data = await result.json();
      setPeople(data);
      setLoading(false);
    }

    fetchPeople();
  }, [currentPage]);

  let numPages = Math.ceil(people.count/10);

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
      {console.log("People", people)}

      <h1>People</h1>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          {people.results?.map((person, i) => {
            return(
              <div key={person.name} className="col p-3">
                <div className="p-1" style={{border: "1px solid gray"}}>
                  <h5>{person.name.toLowerCase()}</h5>

                  <div className="stats">
                    <p><strong>Birth Year:</strong> {person.birth_year}</p>
                    <p><strong>Gender:</strong> {person.gender}</p>
                    <p><strong>Eye Color:</strong> {person.eye_color}</p>
                    <p><strong>Hair Color:</strong> {person.hair_color}</p>
                    <p><strong>Height:</strong> {person.height} cm</p>
                    <p><strong>Mass:</strong> {person.mass} kg</p>
                  </div>
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

export default People;
