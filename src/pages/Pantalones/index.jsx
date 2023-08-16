import React from "react";
import ItemList from "../../components/ItemList";
import { useEffect, useState } from "react";
import { products } from "../../mocks/data";
import "./style.css";

const Pantalones = () => {
  const [categories, setcategories] = useState([]);
  const catFiltered = "pantalon";

  useEffect(() => {
    const filterprod = async () => {
      try {
        await new Promise((res) => setTimeout(res, 1000));
        const productfiltered = products.filter(
          (product) => product.category === catFiltered
        );
        setcategories(productfiltered);
      } catch (error) {
        console.log(error);
      }
    };
    filterprod();
  }, [catFiltered]);

  return (
    <div className="pants">
      {categories.map((product) => {
        return (
          <div key={product.id}>
            {" "}
            <ItemList data={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Pantalones;
