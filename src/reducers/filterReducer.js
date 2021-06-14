import { LOAD_PRODUCTS } from "../actions";

const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
    };
  }
  throw new Error(`No matching action type " ${action.type} ".`);
};

export default filterReducer;
