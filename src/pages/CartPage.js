import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { PageHero, CartContent } from "./../components/index";
function CartPage() {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page center">
        <div className="empty">
          No items in the cart. Add something{" "}
          <Link to="/products" className="btn">
            here.
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="Cart" />
      <Wrapper>
        <CartContent />
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.main`
  .empty {
    font-size: 24px;
    color: #4d4d4d;
  }
  .btn {
    text-decoration: none;
    color: #72abf2;
    transition: all 0.2s linear;
    &:hover {
      color: #9cc4f6;
    }
  }
`;

export default CartPage;
