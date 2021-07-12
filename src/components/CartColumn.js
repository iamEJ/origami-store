import styled from "styled-components";

function CartColumn() {
  return (
    <Wrapper>
      <div className="content">
        <h2>product</h2>
        <h2>price</h2>
        <h2>quantity</h2>
        <h2>subtotal</h2>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: none;
  padding: 60px 0 10px 0;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr 1fr auto;
      column-gap: 16px;
      h2 {
        color: #72abf2;
        text-transform: capitalize;
        font-family: "EB Garamond", serif;
      }
    }
    span {
      width: 40px;
      height: 40px;
    }
    hr {
      margin-top: 5px;
      border: none;
      border-top: 2px solid #72abf2;
    }
  }
`;

export default CartColumn;
