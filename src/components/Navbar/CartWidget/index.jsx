import "./style.css";
import { useCart } from "../../../Context/CartContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CartWidget() {
  const { cart } = useCart();
  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return (
    <Link to={"/cart"}>
      <div className="cartv">
        {" "}
        <Button className="cart-container" variant="light" size="lg">
          <i className="cart bi bi-cart3"></i>
          <span className="number">{totalQuantity}</span>
        </Button>
      </div>
    </Link>
  );
}

export default CartWidget;
