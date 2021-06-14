import { GridView } from "./index";
import { useFilterContext } from "./../context/filterContext";

function ProductList() {
  const { filteredProducts: products } = useFilterContext();
  return (
    <GridView products={products}>
      <h1>Product list</h1>
    </GridView>
  );
}

export default ProductList;
