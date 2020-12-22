import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

/* Funcion that makes the render of the page */
function App() {
  return (
    /* Installed react-router-dom to make route throw pages in a simple way */
    /* First, all the rendered content in the app main page should be inside a "BrowserRouter" tag */
    /* different routes created to several pages */
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              eCommerce
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          {/* Cart content */}
          <Route path="/cart/:id" component={CartScreen}></Route>
          {/* Product detail content */}
          <Route path="/product/:id" component={ProductScreen}></Route>
          {/* Home Screen content */}
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
