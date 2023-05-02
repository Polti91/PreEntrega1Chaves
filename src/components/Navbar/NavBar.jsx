import React from "react";
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h1>Mythic Plus</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav gap-3 ms-5">
              <li className="nav-item">Inicio </li>
              <li className="nav-item">Servicios</li>
              <li className="nav-item dropdown">Raids</li>
              <li className="nav-item dropdown">Míticas Plus</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
