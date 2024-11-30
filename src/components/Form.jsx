import React, { useContext } from "react";
import "./Form.css";
import CandyContext from "../store/candyContext";
const Form = () => {
  const candyCtx = useContext(CandyContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newCandy = {
      id: new Date(),
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
    };
    candyCtx.addCandy(newCandy);
    e.target.reset();
  };
  console.log(candyCtx, "candy context");
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Candy Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ex: Eclair"
          required
        />
      </div>
      <div>
        <label htmlFor="description">Candy Description</label>
        <input
          type="text"
          required
          id="description"
          name="description"
          placeholder="Ex: choclate candy"
        />
      </div>
      <div>
        <label htmlFor="price">Candy Price</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder=" $200"
          required
        />
      </div>
      <button>Add</button>
    </form>
  );
};

export default Form;
