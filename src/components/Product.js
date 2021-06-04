import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

function Product({ url, name, price, id }) {
  return (
    <Wrapper>
      <div className="container">
        <img src={url} alt={name} />
        <Link to={`/products/${id}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>€{price}</p>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: #000;
    border-radius: 5px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: 5px;
    object-fit: cover;
    transition: all 0.3s linear;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #72abf2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: all 0.3s linear;
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: white;
    }
  }

  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }

  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    h5 {
      color: #3d4550;
      font-size: 16px;
      font-family: "EB Garamond", serif;
      letter-spacing: 5px;
    }
    p {
      color: #72abf2;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

export default Product;
