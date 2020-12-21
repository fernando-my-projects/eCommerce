import React from "react";
import data from "../data";
import Product from "../components/Product";

export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {/* Map all products */}
        {data.products.map((product) => (
          /* Every element inside a map should have a key */
          /* Make the code modular, putting Product (component Product) in a separate js file */
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
