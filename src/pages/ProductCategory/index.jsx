import React from "react";
import ItemList from "../../components/ItemList";
import { useEffect, useState } from "react";
import { products } from "../../mocks/data";
import { Link, useParams } from "react-router-dom";
import "./style.css";

const ProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const filterProd = async () => {
      try {
        await new Promise((res) => setTimeout(res, 1000));
        const productFiltered = products.filter(
          (product) => product.category === category
        );
        setCategories(productFiltered);
      } catch (error) {
        console.log(error);
      }
    };
    filterProd();
  }, [category]);

  return (
    <div className="product-category">
      {categories.map((product) => (
        <div key={product.id}>
          <Link to={`/ItemDetail/${product.id}`}>
            <ItemList data={product} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
