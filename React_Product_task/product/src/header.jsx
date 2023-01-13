import React, { Component, useContext } from "react";

import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Cart } from "./context";

export default function Header() {
  const { cart, setCart } = useContext(Cart);
  return (
    <>
      <div className="container-fluid  ">
        <div className=" row bg-secondary text-white p-2 justify-content-between align-center">
          <div className="col-2 ">
            <Link className="nav-link btn btn-primary" to="/">
              Product
            </Link>
          </div>
          <div className=" col-4 ">
            <h2 className="text-center ">Shopping Mart</h2>
          </div>
          <div className="col-1  ">
            <Link className="nav-link btn btn-primary" to="/cart">
              Cart {cart.length}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
