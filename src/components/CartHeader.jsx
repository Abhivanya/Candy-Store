import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartHeader.css";
import CartContext from "../store/cartContext";
const CartHeader = ({ openCart }) => {
  const { count } = useContext(CartContext);
  return (
    <div className="cart-container" onClick={openCart}>
      <FaShoppingCart />
      <span>Your Cart</span>
      <div className="cart-count">{count}</div>
    </div>
  );
};

export default CartHeader;
