import React from "react";
import Product from "./components/Product";
import data from "./data";

/* Funcion that makes the render of the page */
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            eCommerce Website
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {/* Map all products */}
          {data.products.map((product) => (
            /* Every element inside a map should have a key */
            /* Make the code modular, putting Product (component Product) in a separate js file */
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
