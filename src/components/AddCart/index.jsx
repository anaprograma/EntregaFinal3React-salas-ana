import React from "react";

import "./style.css";

const AddCart = () => {
  return (
    <div className="contain">
      <button className="buttons btn btn-link">
        <i className="bi bi-plus"></i>
      </button>
      <p className="Sum">3</p>
      <button className="buttons btn btn-link">
        <i className="bi bi-dash"></i>
      </button>
    </div>
  );
};

export default AddCart;
