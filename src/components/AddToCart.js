import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AmountButtons } from "./index";
import { useCartContext } from "./../context/cartContext";

function AddToCart({ product, id }) {
  const { available, color } = product;
  const { addToCart } = useCartContext();
  const [mainColor, setMainColor] = useState(color[0]);
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > available) {
        tempAmount = available;
      }
      return tempAmount;
    });
  };
  const decreaseAmount = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors : </span>
        <div className="colors-container">
          {color.map((col, index) => {
            return (
              <button
                key={index}
                className={`${
                  mainColor === col ? "color-btn active" : "color-btn"
                }`}
                style={{ background: col }}
                onClick={() => setMainColor(col)}
              >
                {mainColor === col ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
        <Link
          to="/cart"
          onClick={() => addToCart(id, color, amount, product)}
          className="add"
        >
          Add to cart
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .btn-container {
    padding-left: 20px;
  }

  .colors {
    display: flex;
    align-items: center;
    height: 50px;
    span {
      text-transform: capitalize;
      margin-right: 67px;
      font-weight: bold;
      color: #3d4550;
    }
  }
  .colors-container {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    width: 22px;
    border: 1px solid #000;
    border-radius: 50%;
    background: #222;
    opacity: 0.5;
    cursor: pointer;
    margin-right: 5px;
    svg {
      color: #222;
    }
  }

  .active {
    opacity: 1;
  }

  .add {
    width: 150px;
    margin-left: -20px;
  }
`;

export default AddToCart;
