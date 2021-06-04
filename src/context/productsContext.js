import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./../reducers/productReducer";
import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "./../actions";
import { products_url as url } from "./../utils/constans";
import axios from "axios";

const initialState = {
  isSidebarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
};

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispach({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispach({ type: SIDEBAR_CLOSE });
  };

  const fecthProducts = async (url) => {
    dispach({ type: GET_PRODUCTS_LOADING });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispach({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispach({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fecthProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

//custom hook
const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { useProductsContext, ProductsProvider };
