import { createContext, useContext, useReducer } from "react";
import reducer from "./../reducers/productReducer";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "./../actions";

const initialState = {
  isSidebarOpen: false,
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
