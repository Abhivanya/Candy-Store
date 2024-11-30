import React, { useContext } from "react";
import "./Candy.css";
import CartContext from "../../store/cartContext";
const Candy = ({ item }) => {
  const cartCtx = useContext(CartContext);
  const handleAddCandy = (quantity) => {
    cartCtx.addCandy(item, quantity);
  };
  console.log(cartCtx);
  return (
    <li key={item.id} className="item">
      <div className="content">
        <div className="title">{item.name}</div>
        <div className="description">{item.description}</div>
        <div className="price">${item.price}</div>
      </div>
      <div className="btns">
        <button className="btn" onClick={() => handleAddCandy(1)}>
          1 Add
        </button>
        <button className="btn" onClick={() => handleAddCandy(2)}>
          2 Add
        </button>
        <button className="btn" onClick={() => handleAddCandy(3)}>
          3 Add
        </button>
      </div>
    </li>
  );
};

export default Candy;
