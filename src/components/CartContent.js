import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { CartColumn, CartItem, CartTotals } from "./index";
import { Link } from "react-router-dom";

function CartContent() {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="section-center">
      <CartColumn />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products">Continue Shopping</Link>
        <button type="button" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default CartContent;
