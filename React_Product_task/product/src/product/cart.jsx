import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Cart } from "../context";
import ProductDrawer from "./productDrawer";

const Cartpage = () => {
  const { cart, setCart, selectProduct } = useContext(Cart);

  const handleRemove = (item_id) => {
    setCart((cart) => cart.filter((item) => item.item_id !== item_id));
  };
  console.log("cart>>>>>", cart);

  const Increment = (item_id) => {
    const itemInc = cart.find((obj) => obj.item_id === item_id);
    itemInc.quantity = itemInc.quantity + 1;
    console.log("  itemInc",  itemInc );
    setCart([...cart]);

  };

  const Decrement = (item_id) => {
    const itemDec = cart.find((obj) => obj.item_id === item_id);
    if(itemDec.quantity<=1){
      setCart((cart) => cart.filter((item) => item.item_id !== item_id))
    }else{
    itemDec.quantity =
     itemDec.quantity - 1;
     setCart([...cart]);
    }
    console.log("cart>>>>", cart);
  };

  const [total, setTotal] = useState();
  useEffect(() => {
    const price = cart.reduce(
      (total, item) =>total+ Number(item.price.base_unit)*Number(item.quantity) ,
      0
    );
    setTotal(price )
  }, [cart]);
  return (
    <>
      <div> My Cart</div>
      <div> Total={total}</div>
      <div>
        {cart.map((item) => (
          <div key={item.item_id}>
            <div className="row mt-2 m-1">
              <div className="col-md-2">
                <img
                  src={item.picture_url}
                  alt="Product img"
                  style={{ width: "100%", height: "120px" }}
                  className="rounded"
                />
              </div>
              <div className="col-3">
                <h4>{item.name}</h4>
                <p>{item.price.base_unit}</p>
              </div>
              <div className="col-4">
                <div>
                  <button onClick={() => Increment(item.item_id)}>+</button>
                  <button>{item.quantity}</button>
                  <button onClick={() => Decrement(item.item_id)}>-</button>
                </div>
                <div>
                  
                  <button onClick={() => handleRemove(item.item_id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cartpage;
