import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function CartTotals() {
  const { totalAmount, shippingFee } = useCartContext();

  return (
    <Wrapper>
      <div>
        <h4>subtotal :</h4>
        <span>€{totalAmount}.00</span>
      </div>
      <div>
        <p>Shipping Fee :</p>
        <span className="fee">€{shippingFee}.00</span>
      </div>
      <hr />
      <div>
        <h3>Total:</h3>
        <span>€{totalAmount + shippingFee}.00</span>
      </div>
      <Link to="/checkout">Proceed to Checkout</Link>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 380px;
  float: right;
  text-align: center;
  text-transform: capitalize;
  border: 2px solid #72abf2;
  border-radius: 5px;
  padding: 20px 50px;
  margin-bottom: 20px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3,
  h4,
  p {
    padding: 10px 0;
    color: #4d4d4d;
  }

  span {
    color: #72abf2;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 0px;
    text-decoration: none;
    text-transform: capitalize;
    background-color: #72abf2;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    margin: 10px 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    span {
      margin-left: 5px;
    }
    &:hover {
      background-color: #aabffa;
      transition: all 0.3s linear;
    }
  }

  hr {
    border: none;
    border-top: 1px solid lightgrey;
    margin: 10px 0;
  }

  .fee {
    color: #4d4d4d;
  }
`;

export default CartTotals;
