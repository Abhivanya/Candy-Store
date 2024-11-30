import React, { useContext } from "react";
import Candy from "./Candy";
import CandyContext from "../../store/candyContext";
const CandyList = () => {
  const candyCtx = useContext(CandyContext);
  return (
    <ul style={{ listStyle: "none" }}>
      {candyCtx.candys.map((item) => (
        <Candy item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default CandyList;
