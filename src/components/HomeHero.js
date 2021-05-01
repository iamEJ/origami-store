import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineShop } from "react-icons/ai";

function HomeHero() {
  return (
    <section className="hero">
      <Wrapper>
        <article className="hero-info">
          <h1>Simple Products, Elevated</h1>
          <p>We upgrade everyday items with iconic designs.</p>
          <button className="hero-btn from-left">
            <Link to="/products" className="center">
              <AiOutlineShop /> Shop now
            </Link>
          </button>
        </article>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  width: 90vw;
  max-width: 1170px;
  display: grid;
  align-items: center;

  .hero-info h1 {
    text-transform: none;
    max-width: 500px;
    margin-bottom: 12px;
    font-size: 30px;
    color: #3d4550;
  }

  .hero-info p {
    color: #3d4550;
    font-size: 20px;
  }

  .hero-btn {
    position: relative;
    padding: 15px 40px;
    padding-right: 34px;
    font-size: 24px;
    border: none;
    background: transparent;
    letter-spacing: 10px;
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
    cursor: pointer;
    user-select: none;
    margin-top: 30px;

    a {
      text-decoration: none;
      color: #3d4550;
      svg {
        margin-right: 15px;
        font-size: 32px;
      }
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      transition: inherit;
      z-index: -1;
    }

    &:hover {
      color: #4d4d4d;
      transition-delay: 0.5s;
    }

    &:hover:before {
      transition-delay: 0s;
    }

    &:hover:after {
      background: #fff;
      transition-delay: 0.35s;
    }
  }

  .from-left {
    &:before {
      top: 0;
      left: 50%;
      height: 100%;
      width: 0;
      border: 1px solid #fff;
      border-left: 0;
      border-right: 0;
    }

    &:after {
      bottom: 0;
      left: 0;
      height: 0;
      width: 100%;
      background: #fff;
    }

    &:hover:before {
      left: 0;
      width: 100%;
    }

    &:hover:after {
      top: 0;
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    .hero-info h1 {
      text-align: center;
      font-size: 24px;
    }

    .hero-info p {
      text-align: center;
      font-size: 18px;
    }

    .hero-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default HomeHero;
