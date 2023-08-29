import "./style.css";
import { useEffect, useState } from "react";

import ItemList from "../ItemList";
import { products } from "../../mocks/data";
import { Link, useParams } from "react-router-dom";

function itemListContainer() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const prodData = async () => {
      try {
        await new Promise((res) => setTimeout(res, 1000));
        setProductData(products);
      } catch (error) {
        console.log(error);
      }
    };
    prodData();
  }, []);
  return (
    <div className="container-itemlist">
      {productData.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/ItemDetail/${product.id}`}>
              <ItemList data={product} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default itemListContainer;
