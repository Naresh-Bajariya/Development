import React, { createContext, useState } from "react";
export const Cart = createContext();
const Context = ({ children }) => {
  const [selectProduct, setSelectProduct] = useState(null);
  const [cart, setCart] = useState([]);

  
  return (
    <Cart.Provider value={{ cart, setCart, selectProduct, setSelectProduct }}>
      {children}
    </Cart.Provider>
  );
};
export default Context;
