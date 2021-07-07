import { createContext, useContext, useReducer } from "react";
import reducer from "./../reducers/cartReducer";

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 2,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
