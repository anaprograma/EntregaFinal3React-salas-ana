import React from "react";
import "./itemDetailContainer.css";
import ItemDetail from "../ItemDetail";
import Spinner from "../Spinner";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//-------firebase-----
import {
  query,
  collection,
  getDocs,
  documentId,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // control spinner
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    const getProduct = async () => {
      const q = query(
        collection(db, "products"),
        //funcion documentId trae solo un product
        where(documentId(), "==", id)
      );
      const docs = []; //esto se crea para que quede todo dentro del mismo array
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs);
    };
    getProduct();
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container-itemdetail">
      {product.map((prod) => {
        return (
          <div key={prod.id}>
            <ItemDetail data={prod} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetailContainer;
