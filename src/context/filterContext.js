import React, { useContext, useEffect, useReducer } from "react";
import { LOAD_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW } from "../actions";
import reducer from "./../reducers/filterReducer";
import { useProductsContext } from "./productsContext";

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: false,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW });
  };

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
