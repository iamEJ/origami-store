import { LOAD_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW } from "../actions";

const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
    };
  }
  if (action.type === SET_LIST_VIEW) {
    return { ...state, gridView: false };
  }
  if (action.type === SET_GRID_VIEW) {
    return { ...state, gridView: true };
  }
  throw new Error(`No matching action type " ${action.type} ".`);
};

export default filterReducer;
