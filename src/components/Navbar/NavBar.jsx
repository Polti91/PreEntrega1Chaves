import './NavBar.css';
import Img1 from '../../assets/imagenes/mythicplus2.png'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
   
      <header className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={Img1} alt="Mythic Plus" />
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
              <li className="nav-item">Inicio </li>
              <li className="nav-item">Servicios</li>
              <li className="nav-item">Raids</li>
              <li className="nav-item">Míticas Plus</li>
            </ul>
          </nav>
          <CartWidget/>
        </div>
      </header>
    
  );
};

export default NavBar;
