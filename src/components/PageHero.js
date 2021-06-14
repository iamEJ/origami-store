import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PageHero({ title, product }) {
  return (
    <Title>
      <Link to="/">Home </Link>
      {product && <Link to="/products"> / Products</Link>} / {title}
    </Title>
  );
}

const Title = styled.h1`
  background: rgb(154, 199, 255);
  background: linear-gradient(
    261deg,
    rgba(154, 199, 255, 1) 0%,
    rgba(224, 228, 249, 1) 100%
  );
  text-align: center;
  padding: 50px 0;
  color: #fff;
  a {
    color: #4d4d4d;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
`;

export default PageHero;
