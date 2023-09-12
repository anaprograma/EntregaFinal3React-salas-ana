import React from "react";
import ItemList from "../ItemList";
import { useEffect, useState } from "react";
import { useProductContext } from "../../ProductContext/ProductContext";
import "./style.css";
import Spinner from "../Spinner";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  //--con esto puedo usar algo puntual del array products---
  //en este caso veo el id xk es lo que puse en el route de itemdetail
  const { product } = useProductContext();
  let { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // control spinner

  useEffect(() => {
    const itemData = async () => {
      try {
        const selectedItem = product.find((prod) => prod.id === id);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        setItem(selectedItem);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    itemData();
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="itemdetail">
      {item ? <ItemList data={item} description={true} /> : null}
    </div>
  );
};

export default ItemDetail;
