import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Producto ya en el carrito, actualizar cantidad
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Producto no en el carrito, agregarlo
      setCart([...cart, { ...product }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };
  const clearCart = () => {
    // Devuelve todas las cantidades de productos al stock en el contexto de productos
    cart.forEach((product) => {});
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, removeFromCart, clearCart, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
