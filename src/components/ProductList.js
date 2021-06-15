import { GridView } from "./index";
import { useFilterContext } from "./../context/filterContext";
import ListView from "./ListView";

function ProductList() {
  const { filteredProducts: products, gridView } = useFilterContext();

  if (products.length < 1) {
    return (
      <h1 style={{ color: "#3D4550", textAlign: "center" }}>
        Sorry, no products matched your settings.
      </h1>
    );
  }

  if (gridView === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
}

export default ProductList;
