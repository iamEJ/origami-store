import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function CartButtons() {
  return (
    <Wrapper className="cart-btn-wrapper">
      <div className="icons-wrapper">
        <Link to="/cart" className="cart-btn" title="Cart">
          <span className="cart-container">
            <AiOutlineShoppingCart />
            <span className="cart-value">11</span>
          </span>
        </Link>
        <button type="button" className="auth-btn" title="Login">
          <AiOutlineUserAdd />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 160px;

  .icons-wrapper {
    display: flex;
    align-items: center;
  }

  .cart-btn {
    color: #4d4d4d;
    font-size: 25px;
    display: flex;
    align-items: center;
    margin-right: 16px;
  }

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 25px;
      font-size: 25px;
      margin-left: 5px;
    }
    &:hover {
      color: #72abf2;
    }
  }

  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: #72abf2;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 12px;
    color: #fff;
    padding: 12px;
  }

  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 25px;
    cursor: pointer;
    color: #4d4d4d;
    svg {
      margin-left: 5px;
    }
    &:hover {
      color: #72abf2;
    }
  }
`;

export default CartButtons;
