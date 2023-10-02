import React from "react";
import "./itemDetail.css";

import { useState } from "react";

import { useCart } from "../../Context/CartContext";
import Counter from "../Counter";

const ItemDetail = ({ data }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  //--add to cart
  const increase = () => {
    quantity < data.stock && setQuantity(quantity + 1);
  };
  //---decrease from cart
  const decrease = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart({ ...data, quantity });
    "esto viene de itemdetail", { ...data, quantity };
  };

  return (
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
            <h5 className="text card-text">Stock: {data.stock}</h5>
            <h5 className="card-text">Description: {data.description}</h5>
            <Counter
              quantity={quantity}
              increase={increase}
              decrease={decrease}
              handleAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
