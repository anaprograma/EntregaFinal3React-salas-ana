import React from "react";
import "./counter.css";

import { Link } from "react-router-dom";
const Counter = ({ quantity, increase, decrease, handleAddToCart }) => {
  return (
    <div className="count">
      <button onClick={decrease} className="buttons btn btn-link">
        <i className="bi bi-dash"></i>
      </button>
      <p className="Sum" style={{ margin: 0 }}>
        {quantity}
      </p>
      <button onClick={increase} className="buttons btn btn-link">
        <i className="bi bi-plus"></i>
      </button>

      <div className="addCart">
        <Link to="/cart">
          <button onClick={handleAddToCart} className="btn button btn btn-link">
            <span className="buy">Add to Cart</span>
            <i className=" color bi bi-bag-heart-fill"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Counter;
