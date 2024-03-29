import { createContext, useContext, useEffect, useReducer } from "react";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTAL,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
} from "../actions";
import reducer from "./../reducers/cartReducer";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 2,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispach({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispach({ type: REMOVE_ITEM, payload: id });
  };

  const toggleAmount = (id, value) => {
    dispach({ type: TOGGLE_AMOUNT, payload: { id, value } });
  };

  const clearCart = () => {
    dispach({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispach({ type: COUNT_CART_TOTAL });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
