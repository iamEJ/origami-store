import { PageHero, StripeCheckout } from "../components/index";
import { useCartContext } from "./../context/cartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CheckoutPage() {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div>
            Your cart is empty. Fill it <Link to="/products">here</Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    font-size: 24px;
    color: #4d4d4d;
    a {
      text-decoration: none;
      color: #72abf2;
      transition: all 0.2s linear;
      &:hover {
        color: #9cc4f6;
      }
    }
  }
`;

export default CheckoutPage;
