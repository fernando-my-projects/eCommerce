import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};
/* This reducer only returns a list of products,
"reducer = (state, action)"
*/
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
