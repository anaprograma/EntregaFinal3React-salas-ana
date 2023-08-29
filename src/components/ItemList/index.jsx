import React from "react";
import "./style.css";

import AddCart from "../AddCart";

const ItemList = ({ data, description }) => {
  return (
    <div className="contain">
      {description ? (
        <div className="card des mb-3">
          <div className="row g-0">
            <div className="col-md-5 col-12">
              <img
                src={data.img}
                className=" img-fluid rounded-start "
                alt={data.name}
              />
            </div>
            <div className="col-md-7 col-127">
              <div className="card-body">
                <h5 className="card-title">Name: {data.name}</h5>
                <h5 className="card-text">Price: {data.price}</h5>
                <h5 className="text card-text">Product: {data.category}</h5>
                <h5 className="card-text">Description: {data.description}</h5>

                <div className="d-flex justify-content-between align-items-center">
                  <AddCart></AddCart>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <img src={data.img} className="card-img-top " alt={data.name} />

          <div className="card-body">
            <h5 className="text card-title">Name: {data.name}</h5>
            <h5 className="text">Price: {data.price}</h5>
            <h5 className="text card-text">Product: {data.category}</h5>
            <button type="button" className="btn btn-outline-dark">
              Ver más
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemList;
