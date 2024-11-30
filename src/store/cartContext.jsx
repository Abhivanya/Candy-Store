import React, { useState, useContext } from "react";

const CartContext = React.createContext({
  cartItems: [],
  count: 0,
  totalAmount: 0,
  addCandy: (candy, quantity) => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [count, setCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const addCandy = (candy, quantity) => {
    setCount((prev) => prev + quantity);
    setTotalAmount((prev) => prev + candy.price * quantity);
    setCartItems((prev) => [...prev, candy]);
  };
  const contextValue = {
    cartItems: cartItems,
    count: count,
    totalAmount: totalAmount,
    addCandy: addCandy,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
