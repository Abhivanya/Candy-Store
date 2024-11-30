import React, { useState, useContext } from "react";

const CandyContext = React.createContext({
  candys: [],
  addCandy: (candy) => {},
});

export const CandyProvider = ({ children }) => {
  const [candys, setCandys] = useState([]);

  const addCandy = (candy) => {
    setCandys((prev) => [...prev, candy]);
  };
  const contextValue = {
    candys: candys,
    addCandy: addCandy,
  };
  return (
    <CandyContext.Provider value={contextValue}>
      {children}
    </CandyContext.Provider>
  );
};

export default CandyContext;
