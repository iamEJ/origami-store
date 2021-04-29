import { Link } from "react-router-dom";
import styled from "styled-components";

function ErrorPage() {
  return (
    <Wrapper className="error-wrapper">
      <h1>404</h1>
      <h3>Something went wrong!</h3>
      <p>
        The requested URL can not be found or might be temporarily unavailable.
      </p>
      <Link to="/" className="error-btn">
        Go Home
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 200px;
    text-shadow: 1px 2px 11px rgba(165, 165, 165, 0.72);
    color: #fff;
    margin: 0;
  }

  h3,
  p {
    color: #4d4d4d;
    padding-bottom: 5px;
    margin: 0 20px;
  }

  .error-btn {
    text-decoration: none;
    background-color: #72abf2;
    color: #fff;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgb(165, 165, 165);
    &:hover {
      background-color: #aabffa;
    }
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 140px;
    }
  }
`;

export default ErrorPage;
