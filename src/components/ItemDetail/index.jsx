import React from "react";
import ItemList from "../ItemList";
import { useEffect, useState } from "react";
import { products } from "../../mocks/data";
import "./style.css";

import { useParams } from "react-router-dom";

const ItemDetail = () => {
  //--con esto puedo usar algo puntual del array products---
  //en este caso veo el id xk es lo que puse en el route de itemdetail
  let { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const itemData = async () => {
      try {
        await new Promise((res) => setTimeout(res, 1000));
        const selectedItem = products.find((product) => product.id === id);
        selectedItem && setItem(selectedItem);
      } catch (error) {
        console.log(error);
      }
    };
    itemData();
  }, [id]);

  return (
    <div className="itemdetail">{item ? <ItemList data={item} /> : null}</div>
  );
};

export default ItemDetail;
