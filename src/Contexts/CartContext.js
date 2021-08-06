import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity };
        } else return cartItem;
      });
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const updateCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(updateCart);
  };

  const realStock = (item) => {
    const foundItem = cart.find((el) => el.id === item.id);
    return foundItem ? item.stock - foundItem.quantity : item.stock;
  };

  const reduceCart = cart.reduce(
    (acc, el) => (acc += el.precio * el.quantity),
    0
  );

  const reduceQuantity = cart.reduce((acc, el) => (acc += el.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        clearCart,
        addToCart,
        reduceCart,
        removeItem,
        reduceQuantity,
        realStock,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
