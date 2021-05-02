import React, { useState, createContext } from "react";

export const ItemContext = createContext();

export const ItemsProvider = (props) => {
  const [items, setItems] = useState([
    {
      item: "want to learn angular",
      complete: true,
    },
    {
      item: "want to learn react",
      complete: true,
    },
    {
      item: "want to learn scala",
      complete: true,
    },
  ]);

  return (
    <ItemContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemContext.Provider>
  );
};
