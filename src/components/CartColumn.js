import styled from "styled-components";

function CartColumn() {
  return (
    <Wrapper className="section">
      <div className="content">
        <h2>item</h2>
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
  padding-top: 70px;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
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
