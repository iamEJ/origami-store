import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { useCartContext } from "../context/cartContext";
import { AmountButtons } from "./index";

function CartItem({ id, image, price, name, color, amount }) {
  const { removeItem, toggleAmount } = useCartContext();

  const increaseAmount = () => {
    toggleAmount(id, "inc");
  };
  const decreaseAmount = () => {
    toggleAmount(id, "dec");
  };

  return (
    <Wrapper>
      <div className="content">
        <div className="img-container">
          <img src={image} alt={name} />
          <h2>{name}</h2>
        </div>
        <h4 className="price">€{price}.00</h4>
        <AmountButtons
          className="buttons"
          amount={amount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
        <h4 className="subtotal">€{amount * price}.00</h4>
        <button
          type="button"
          className="remove-btn"
          onClick={() => removeItem(id)}
        >
          <AiOutlineClose />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: block;
  align-items: center;
  color: #4d4d4d;
  font-size: 16px;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 10px;

  .content {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr auto;
    column-gap: 16px;
    align-items: center;
    .img-container {
      display: flex;
      align-items: center;

      h2 {
        margin-left: 15px;
        text-transform: capitalize;
        font-family: "EB Garamond", serif;
      }
      img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 5px;
        margin: 5px;
      }
    }

    h4 {
      font-weight: 400;
    }

    button {
      background: none;
      display: flex;
      align-items: center;
      border: none;
      cursor: pointer;
      font-size: 16px;
      margin-right: 10px;
      &:hover {
        color: #8a1e24;
      }
    }
  }

  @media (max-width: 500px) {
    .price {
      display: none;
    }
    .content {
      grid-template-columns: 3fr 50px 1fr auto;
      .img-container {
        h2 {
          font-size: 14px;
        }
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;

export default CartItem;
