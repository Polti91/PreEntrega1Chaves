import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">
          <img src="../imagenes/mythicplus2.png" alt="Mythic Plus" />
        </Link>
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
        <nav className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav gap-3 ms-5">
            <li className="nav-item">
              <NavLink to={"/"} style={{ textDecoration: "none" }}>
                Inicio
              </NavLink>{" "}
            </li>
            <li className="nav-item">
              <NavLink to={`/categorias/1`} style={{ textDecoration: "none" }}>
                Míticas Plus
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/categorias/2`} style={{ textDecoration: "none" }}>
                Raids
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/categorias/3`} style={{ textDecoration: "none" }}>
                Servicios
              </NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
