import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./product/product";
import ProductDrawer from "./product/productDrawer";
import Header from "./header";
import Cartpage from "./product/cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Product  />}></Route>
        <Route path="/product/:item_id" element={<ProductDrawer />} />
        <Route path={"/cart"} element={<Cartpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
