import { useState } from "react";

import "./App.css";
import ProductCard from "../components/ProductCard";
import Data from "../productData";

function App() {
  let productData = Data.map((element) => {
    return (
      <ProductCard name={element.name} img={element.img} desc={element.desc} />
    );
  });

  return <section>{productData}</section>;
}

export default App;
