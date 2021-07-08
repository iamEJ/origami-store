import { BsTrash } from "react-icons/bs";
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
      <img src={image} height="100" alt={name} />
      <h5>{name}</h5>
      <span style={{ background: color[0] }}>{color}</span>
      <AmountButtons
        amount={amount}
        increaseAmount={increaseAmount}
        decreaseAmount={decreaseAmount}
      />
      <h5 className="subtotal">{amount * price}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <BsTrash />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default CartItem;
