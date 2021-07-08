import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function CartTotals() {
  const { totalAmount, shippingFee } = useCartContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>€{totalAmount}.00</span>
          </h5>
          <p>
            Shipping Fee : <span>€{shippingFee}.00</span>
          </p>
          <hr />
          <h4>
            Total: <span>€{totalAmount + shippingFee}.00</span>
          </h4>
          <Link to="/checkout">Proceed to Checkout</Link>
        </article>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default CartTotals;
