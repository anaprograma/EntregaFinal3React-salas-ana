import React from "react";
import { useState } from "react";

import "./style.css";

const AddCart = ({ price }) => {
  const [number, setNumber] = useState(0);
  const sum = () => {
    setNumber(number + 1);
  };
  const minus = () => {
    number > 0 ? setNumber(number - 1) : null;
  };
  const subtotal = price * number;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <button onClick={sum} className="buttons btn btn-link">
          <i className="bi bi-plus"></i>
        </button>
        <p className="Sum">{number}</p>
        <button onClick={minus} className="buttons btn btn-link">
          <i className="bi bi-dash"></i>
        </button>
        <button className="button btn btn-link">
          <span className="buy">Add to Cart</span>
          <i className="bi bi-bag-heart-fill"></i>
        </button>
      </div>
      <h6 className="card-text">Subtotal: {subtotal}</h6>
    </>
  );
};

export default AddCart;
