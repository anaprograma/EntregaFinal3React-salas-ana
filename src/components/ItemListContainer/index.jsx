import "./style.css";
import { useEffect, useState } from "react";

import ItemList from "../ItemList";

import { Link } from "react-router-dom";
// -----firebase-------
import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

function itemListContainer() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getProd = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setProductData(docs);
    };
    getProd();
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
