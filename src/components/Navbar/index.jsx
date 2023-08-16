import CartWidget from "./CartWidget";
import Brand from "./brand";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-body-secondary d-flex">
      <Brand />

      <ul>
        <Link className="li" to="/">
          Inicio
        </Link>
        <Link className="li" to="/remeras">
          Remeras
        </Link>
        <Link className="li" to="/pantalones">
          Pantalones
        </Link>
        <Link className="li" to="/sweaters">
          Sweaters
        </Link>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default Navbar;
