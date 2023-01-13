import React, { useContext } from "react";
import {
  createSearchParams,
  generatePath,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import ProductJson from "../products.json";
import { Cart } from "../context";

function Product() {
  const navigate = useNavigate();
  // const [selectProduct, setSelectProduct] = useState(null);
  const {setCart ,selectProduct, setSelectProduct} = useContext(Cart);
  console.log(selectProduct);

  const params = useParams();
  console.log(params);
  // const item = ProductJson.find((item) => item.item_id === item_id);
  //   console.log("out side", item);
  // const handleClick = (item) => {
  //   console.log("item", item);
  //   console.log("cartItem", cart);
  //   if (cart.some((cartItem) => cartItem.item_id === item.item_id)) {
  //     console.log("cart", cart);
  //     setCart((cart) =>
  //       cart.map((cartItem) => {
  //         //   console.log("cartItem Map", cartItem.price.base_unit);
  //         return cartItem.item_id === item.item_id
  //           ? {
  //               ...cartItem,
  //               price: cartItem.price.base_unit + cartItem.price.base_unit,
  //             }
  //           : cartItem;
  //       })
  //     );
  //     return;
  //   }
  //   console.log(cart);

  //   setCart((cart) => [
  //     ...cart,
  //     item, // <-- initial price 1
  //   ]);
  // };
  
  return (
    <div>
      <div className="container-fluid">
        <div>
          <div className="container">
            
            <div className="row ">
              {ProductJson.map((data, index) => (
                <div className=" col-lg-3 p-2  " key={data.item_id}>
             
                  <Link to={generatePath("/product/:item_id", data)}>
                    <div className="card">
                      <img
                        className="objectfit rounded"
                        src={data.picture_url}
                        style={{ width: "100%", height: "180px" }}
                        alt="Food Image"
                        onClick={() => {
                          setSelectProduct(data);
                        }}
                      />

                      <h4 className="text-center my-2">{data.name}</h4>
                      <div className="text-center fs-4 text-primary">
                        {`${data.price.base_unit}.${data.price.exponent}`}{" "}
                        <span className="text-black-50">
                          {data.price.iso_4217}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Product;

{
  /* <Drawer
  anchor={"right"}
  open={!!selectProduct}
  onClose={() => setSelectProduct(null)}
>
  {selectProduct && (
    <div style={{ width: "500px" }}>
      <div className="">
        <div className=" bg-secondary text-white p-2">
          <h2 className="text-center">Details</h2>
        </div>
      </div>
      <div className="row mt-2 m-2">
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
            {AddonData[selectProduct.item_id].map((addProduct, index) => {
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
              }
            })}
          </div>
          <Button
            //  onClick={() => addToCart()}
            onClick={() => handleClick(selectProduct)}
            variant="contained"
          >
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  )}
</Drawer> */
}
