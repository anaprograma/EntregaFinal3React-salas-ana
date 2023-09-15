import "./style.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CartWidget() {
  // const totalItemsInCart = cart.reduce(
  //   (total, item) => total + item.quantity,
  //   0
  // );

  return (
    <Link to={"/cart"}>
      <div className="cartv">
        {" "}
        <Button className="cart-container" variant="light" size="lg">
          <i className="cart bi bi-cart3"></i>
          <span className="number"></span>
        </Button>
      </div>
    </Link>
  );
}

export default CartWidget;
