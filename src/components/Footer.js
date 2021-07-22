import styled from "styled-components";
import { AiOutlineFacebook } from "react-icons/ai";

function Footer() {
  return (
    <Wrapper>
      <a href="https://www.facebook.com/origamidovanos">
        Follow Us: <AiOutlineFacebook />
      </a>
      <div className="footer-copy">
        <p>
          &copy; {new Date().getFullYear()}
          <span> Origami Gift </span>
        </p>
        <p>| All rights reserved.</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 90vw;
  margin: 0 auto;
  border-top: 1px solid #d9d9d9;
  padding: 0 20px;

  .footer-copy {
    display: flex;
    p {
      font-size: 12px;
      color: #4d4d4d;
      span {
        margin-right: 3px;
        color: #72abf2;
        font-weight: 500;
      }
    }
  }

  a {
    display: flex;
    color: #4d4d4d;
    font-size: 12px;
    align-items: center;
    padding: 20px;
    text-decoration: none;
    svg {
      font-size: 24px;
      margin-left: 5px;
      &:hover {
        color: #72abf2;
      }
    }
  }

  @media (max-width: 700px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    a {
      padding: 5px;
    }
  }
`;

export default Footer;
