import "./style.css";

import ItemList from "../ItemList";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // control spinner
  const { category } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    const getProducts = async () => {
      let q;
      if (category) {
        q = query(
          collection(db, "products"),
          where("category", "==", category)
        );
      } else {
        q = query(collection(db, "products"));
      }
      const docs = []; //esto se crea para que quede todo dentro del mismo array
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    };
    getProducts();
  }, [category]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container-itemlist">
      {products.map((product) => {
        return (
          <Link to={`/item/${product.id}`} key={product.id}>
            <div key={product.id}>
              <ItemList data={product} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ItemListContainer;
