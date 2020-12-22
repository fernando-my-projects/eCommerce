import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";

/* Funcion that makes the render of the page */
function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    /* Installed react-router-dom to make route throw pages in a simple way */
    /* First, all the rendered content in the app main page should be inside a "BrowserRouter" tag */
    /* different routes created to several pages */
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              eCommerce
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
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
