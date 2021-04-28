import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "./../actions";

const productsReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  throw new Error(`No matching action type " ${action.type} ".`);
};

export default productsReducer;
