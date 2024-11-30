import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Cart from "./components/Cart";
import CandyList from "./components/candyList/CandyList";
import { CandyProvider } from "./store/candyContext";
import { CartProvider } from "./store/cartContext";
const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  return (
    <CandyProvider>
      <CartProvider>
        {isCartOpen && <Cart closeCart={closeCart} />}
        <Header openCart={openCart} />
        <Form />
        <CandyList />
      </CartProvider>
    </CandyProvider>
  );
};

export default App;
