import React from "react";

const navItems = [
  {id: "1", name: "People"},
  {id: "2", name: "Starships"},
  {id: "3", name: "Vehicles"},
  {id: "4", name: "Species"},
  {id: "5", name: "Planets"}
];

function createNavItem(item) {
  return (
    <li key={item.id} className="nav-item">
      <a className="nav-link" href="#">{item.name}</a>
    </li>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Star Wars Holocron</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map(createNavItem)}
          </ul>

          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-info" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
