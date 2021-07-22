import styled from "styled-components";
import { useProductsContext } from "./../context/productsContext";
import { Product, Loading, Error } from "./index";

function FeaturedProducts() {
  const {
    productsLoading: loading,
    productsError: error,
    featuredProducts: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper>
      <div className="title">
        <h1>Featured Products</h1>
      </div>
      <div className="featured-products">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  margin: 50px;
  margin: 0 auto;
  max-width: 1200px;

  .title {
    text-align: center;
    color: #3d4550;
    padding: 10px 0;
    font-size: 22px;
    font-family: "EB Garamond", serif;
  }

  .featured-products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin: 0 auto;
    padding: 30px;
  }

  @media (max-width: 900px) {
    .featured-products {
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  }
  @media (max-width: 400px) {
    .featured-products {
      grid-template-columns: 1fr;
    }
  }
`;

export default FeaturedProducts;
