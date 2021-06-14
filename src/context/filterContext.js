import React, { useContext, useEffect, useReducer } from "react";
import { LOAD_PRODUCTS } from "../actions";
import reducer from "./../reducers/filterReducer";
import { useProductContex, useProductsContext } from "./productsContext";

const initialState = {
  filteredProducts: [],
  allProducts: [],
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value="hello">{children}</FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
