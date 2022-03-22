import React from "react";

const holocronImg = require("../assets/images/holocrons.png");

function Home() {
  return (
    <div className="d-flex flex-column align-items-center mt-3">

      <div className="container d-flex justify-content-center pb-3">
        <img className="img-fluid" src={holocronImg} alt="holocrons"></img>
      </div>

      <div className="container">
        <h1 className="home-title text-center">Star Wars Holocron</h1>
        <p className="home-description text-center">
          holocrons in the star wars universe are information-storage devices used by both the jedi order and the sith.
          they contained ancient lessons and valuable information in holographic form.
        </p>
      </div>

      <div className="container">
        <h1 className="home-description text-center">Choose Your Side</h1>
      </div>

      <div className="container d-flex justify-content-center">
        <button className="btn btn-outline-info me-5">Light Side</button>
        <button className="btn btn-outline-danger">Dark Side</button>
      </div>
    </div>
  );
}

export default Home;
