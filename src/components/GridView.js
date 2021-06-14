import styled from "styled-components";
import { Product } from "./index";

function GridView({ products }) {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  img {
    height: 320px;
  }

  .products-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    margin: 0 auto;
    padding: 10px;
  }

  @media (max-width: 1000px) {
    .products-container {
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  }

  @media (max-width: 450px) {
    .products-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default GridView;
