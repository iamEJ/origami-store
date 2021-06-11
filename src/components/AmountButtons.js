import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

function AmountButtons({ amount, increaseAmount, decreaseAmount }) {
  return (
    <Wrapper>
      <button type="button" className="amount-btn" onClick={decreaseAmount}>
        <FaMinus />
      </button>
      <h1>{amount}</h1>
      <button type="button" className="amount-btn" onClick={increaseAmount}>
        <FaPlus />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  button {
    background: transparent;
    border: none;
    color: #72abf2;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: #3d4574;
    }
  }
  h1 {
    margin: 0 20px;
  }
`;

export default AmountButtons;
