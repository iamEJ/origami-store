import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { PageHero, CartContent } from "./../components/index";
function CartPage() {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page">
        <div className="empty">
          No items in the cart. Add something{" "}
          <Link to="/products" className="btn">
            here
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

const Wrapper = styled.main``;

export default CartPage;
