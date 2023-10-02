import React from "react";
import "./checkout.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useCart } from "../../Context/CartContext";

const CheckOut = () => {
  const { cart, clearCart } = useCart();
  const [pedidoid, setPedidoid] = useState("");
  //HANDLE ON SUBMIT
  const { register, handleSubmit } = useForm();
  const pedidos = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
    };
    console.log(pedido);
    const pedidosRef = collection(db, "pedidos");
    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoid(doc.id);
      clearCart();
    });
  };
  if (pedidoid) {
    return (
      <div className="container">
        <h2>Gracias por tu compra</h2>
        <p>Su numero de orden es : {pedidoid}</p>
      </div>
    );
  }

  return (
    <div className="container-form">
      <h1>Finalizar compra</h1>
      <form className="form" onSubmit={handleSubmit(pedidos)}>
        <input
          typeof="text"
          placeholder="Ingresar nombre"
          {...register("nombre")}
        ></input>
        <input
          typeof="text"
          placeholder="Ingresar apellido"
          {...register("apellido")}
        ></input>
        <input
          typeof="text"
          placeholder="Ingresar email"
          {...register("email")}
        ></input>
        <button typeof="submit">finalizar</button>
      </form>
    </div>
  );
};

export default CheckOut;
