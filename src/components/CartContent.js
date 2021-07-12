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
      <div className="link-container">
        <Link to="/products" className="btn-hover color-1">
          Continue Shopping
        </Link>
        <button type="button" className="btn-hover color-1" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 70%;

  .link-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    a {
      text-decoration: none;
    }

    .btn-hover {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      margin-top: 20px;
      padding: 10px 15px;
      text-align: center;
      border: none;
      background-size: 300% 100%;
      border-radius: 3px;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }

    .btn-hover:hover {
      background-position: 100% 0;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }

    .btn-hover:focus {
      outline: none;
    }

    .btn-hover.color-1 {
      background-image: linear-gradient(
        to right,
        #25aae1,
        #4481eb,
        #04befe,
        #3f86ed
      );
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export default CartContent;
