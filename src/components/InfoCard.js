import React from "react";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";

function InfoCard() {
  return (
    <Wrapper>
      <div className="container">
        <div className="icon">
          <AiOutlineInfoCircle />
        </div>

        <p>
          This site is for learning and testing purpuses. If you like what you
          see and want to buy something, please contact me through
          <a href="https://www.facebook.com/origamidovanos"> Facebook</a>.
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    align-items: center;
    background-color: #d6e0fa;
    color: #4d4d4d;
    border-left: 5px solid #72abf2;
    margin: 10px;
    padding: 10px;
    text-align: center;

    .icon {
      width: 30px;
      height: 30px;
      margin-right: 5px;
      svg {
        color: #72abf2;
        font-size: 30px;
      }
    }
    a {
      text-decoration: none;
      color: #72abf2;
      &:hover {
        color: #a9b4e9;
      }
    }
  }
`;

export default InfoCard;
