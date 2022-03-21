import React from "react";
import {Link} from "react-router-dom";
import {navItems} from "./NavbarItems";

function createNavItem(item) {
  return (
    <li key={item.id} className="nav-item">
      <Link className="nav-link" to={item.name.toLowerCase()}>{item.name}</Link>
    </li>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Star Wars Holocron</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map(createNavItem)}
          </ul>

          <form className="d-flex justify-content-lg-end">
            <div className="w-50 me-2">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"></input>
            </div>

            <button className="btn btn-outline-info" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
