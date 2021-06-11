import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

function AddToCart({ product, id }) {
  const { available, color } = product;
  const [mainColor, setMainColor] = useState(color[0]);
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
      <div className="btn-container">buttons</div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .colors {
    display: flex;
    align-items: center;
    height: 50px;
    span {
      text-transform: capitalize;
      margin-right: 10px;
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
`;

export default AddToCart;
