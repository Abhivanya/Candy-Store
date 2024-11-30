import React from "react";
import CartHeader from "./CartHeader";
import "./Header.css";
const Header = ({ openCart }) => {
  return (
    <header>
      <h1>
        <span style={{ color: "yellow" }}>Candy 🍬</span>
        <span style={{ color: "skyblue" }}>{"   "}World</span>
      </h1>
      <CartHeader openCart={openCart} />
    </header>
  );
};

export default Header;
