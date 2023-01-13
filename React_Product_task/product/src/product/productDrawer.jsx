import {
  Button,
  Checkbox,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { Component, memo, useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductJson from "../products.json";

import AddonData from "../options.json";
import { useEffect } from "react";
import { Cart } from "../context";

function ProductDrawer() {
  console.log("memo");
  const params = useParams();
  const { cart, setCart, selectProduct, setSelectProduct } = useContext(Cart);
  console.log("selectProduct>>>", selectProduct);

  // const [selectProduct, setSelectProduct] = useState();
  useEffect(() => {
      const findProduct = ProductJson.find(
        (item) => item.item_id === params.item_id
      );
      console.log(findProduct);
      console.log(AddonData[params.item_id]);
      setSelectProduct(findProduct);
  }, []);
  const addToCart=(selectProduct)=>{
    let m = cart.findIndex(
      (a) => a.item_id === selectProduct.item_id
    );
    if (m < 0) {
      return setCart([
        ...cart,
        { ...selectProduct, quantity: 1 },
      ]);
    } else {
      cart[m].quantity = cart[m].quantity + 1;
      setCart([...cart]);
    }
    return;
  }

  return (
    <div>
      <div className="row justify-content-center">
        {selectProduct && (
          <div style={{ width: "500px" }}>
            <div className="">
              <div className=" bg-info p-2">
                <h2 className="text-center">Details</h2>
              </div>
            </div>
            <div className="card">
              <div className="row mt-2 m-1">
                <div className="col-md-4">
                  <img
                    src={selectProduct.picture_url}
                    alt="website img"
                    style={{ width: "100%", height: "180px" }}
                    className="rounded"
                  />
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <h4 className="col-4">{selectProduct.name}</h4>
                    <div className="text-end fs-4 text-primary col-7">
                      {`${selectProduct.price.base_unit}.${
                        selectProduct.price.exponent
                      }${" "}${selectProduct.price.iso_4217}`}
                    </div>
                    <div>{selectProduct.description}</div>
                  </div>
                  <div>
                    {AddonData[selectProduct.item_id] &&
                      AddonData[selectProduct.item_id].map(
                        (addProduct, index) => {
                          if (addProduct.uitype == "CHECKBOX") {
                            return (
                              <FormGroup key={index}>
                                <FormLabel>{addProduct.section_name}</FormLabel>

                                {addProduct.choices.map((data, index) => {
                                  return (
                                    <FormControlLabel
                                      key={index}
                                      className={`${
                                        addProduct.required == true
                                          ? "required"
                                          : false
                                      }`}
                                      control={<Checkbox />}
                                      required
                                      value={
                                        data.price.base_unit +
                                        data.price.exponent / 10
                                      }
                                      label={
                                        <div>
                                          {data.name}
                                          &nbsp;
                                          {data.price.base_unit +
                                            data.price.exponent / 10}
                                          <span className="fw-bold">
                                            {" "}
                                            {data.price.iso_4217}
                                          </span>
                                        </div>
                                      }
                                    ></FormControlLabel>
                                  );
                                })}
                              </FormGroup>
                            );
                          } else if (addProduct.uitype == "RADIO") {
                            return (
                              <FormControl key={index}>
                                <FormLabel>{addProduct.section_name}</FormLabel>
                                <RadioGroup
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  name="radio-buttons-group"
                                >
                                  {addProduct.choices.map((data, index) => {
                                    return (
                                      <FormControlLabel
                                        key={index}
                                        control={<Radio />}
                                        label={
                                          <div>
                                            {data.name}
                                            &nbsp;
                                            {data.price.base_unit +
                                              data.price.exponent / 10}
                                            <span className="fw-bold">
                                              {" "}
                                              {data.price.iso_4217}
                                            </span>
                                          </div>
                                        }
                                        value={
                                          data.price.base_unit +
                                          data.price.exponent / 10
                                        }
                                      ></FormControlLabel>
                                    );
                                  })}
                                </RadioGroup>
                              </FormControl>
                            );
                          } else {
                            return null;
                          }
                        }
                      )}
                  </div>

                  <button
                    onClick={() => addToCart(selectProduct)
                      }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDrawer;
