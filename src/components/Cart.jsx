import React, { useContext } from "react";
import Modal from "../ui/Modal";
import "./Cart.css";
import CartContext from "../store/cartContext";
const Cart = ({ closeCart }) => {
  const cartCtx = useContext(CartContext);
  return (
    <Modal>
      <div className="container">
        <ul>
          {cartCtx.cartItems.map((item) => (
            <li key={item.id} className="item">
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>{item.price}</div>
            </li>
          ))}
        </ul>

        <div>
          <div className="amount">
            <div>
              <span style={{ color: "blue" }}>Total Amount : </span>
              <span>35.23</span>
            </div>
          </div>
          <div className="btns">
            <button className="close" onClick={closeCart}>
              Close
            </button>
            <button>Order</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
