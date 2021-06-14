import styled from "styled-components";
import { PageHero, Filters, Sort, ProductList } from "./../components/index";

function ProductsPage() {
  return (
    <main>
      <PageHero title="Products" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 48xp 24px;
    margin: 64 auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
