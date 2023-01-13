import { Button } from "bootstrap";
import React, { useContext } from "react";
import { Cart } from "../context";

const AddToCart = () => {
    // const{cart,setCart}=useContext(Cart)
    const { cart, setCart, product, setProduct } = useContext(Cart);
  return (
    <div>
      <Button
        // onClick={() => {
        //   setCart([...cart, product]);
        // }}
        variant="contained"
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default AddToCart;
