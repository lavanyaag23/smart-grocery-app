import React from "react";
import ProductList from "../components/ProductList";

function Home({ products }) {
  return (
    <div>
      <h2 style={{ padding: "10px" }}>All Products</h2>
      <ProductList products={products} />
    </div>
  );
}

export default Home;