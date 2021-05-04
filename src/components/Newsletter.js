import React from "react";
import styled from "styled-components";

function Newsletter() {
  return (
    <Wrapper>
      <Card>
        <h1>Newsletter</h1>
        <p>
          Subscribe to get special offers, free giveaways, and
          once-in-a-lifetime deals. We promise to send emails you will love.
        </p>
      </Card>
      <div>
        <input type="text" placeholder="your-email@example.com" />
        <button type="button">Join</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  text-align: center;
  flex-direction: column;

  div {
    margin-top: -20px;
  }

  input {
    width: 360px;
    margin: 0 auto;
    height: 40px;
    border-radius: 3px;
    border: 1px solid lightgrey;
    padding-left: 20px;
  }

  button {
    margin-left: -54px;
    width: 50px;
    height: 30px;
    background-color: #72abf2;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #aabffa;
      transition: all 0.3s linear;
    }
  }

  @media screen and (max-width: 450px) {
    input {
      width: 240px;
    }
  }
`;

const Card = styled.div`
  background-color: #f7f9fa;
  padding: 20px;
  margin: 0 50px;

  h1 {
    font-family: "EB Garamond", serif;
    color: #3d4550;
    font-size: 32px;
  }

  p {
    color: #748194;
    font-size: 18px;
    width: 60%;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 30px;
  }

  @media screen and (max-width: 850px) {
    margin: 0 20px;
    p {
      width: 80%;
    }
  }
`;

export default Newsletter;
