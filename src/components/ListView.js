import styled from "styled-components";
import { Link } from "react-router-dom";

function ListView({ products }) {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, name, description, price, url } = product;
        return (
          <article key={id}>
            <div className="image-container">
              <img src={url} alt={name} />
            </div>
            <div className="info">
              <h4>{name}</h4>
              <h5>€{price}</h5>
              <p>{description.substring(0, 140)}...</p>
              <Link to={`/products/${id}`}>More</Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 30px;

  article {
    display: grid;
    grid-template-columns: 300px auto;
  }

  .image-container {
    height: 260px;
    width: 260px;
    margin: 10px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h4 {
    color: #3d4550;
    font-size: 32px;
    font-family: "EB Garamond", serif;
    letter-spacing: 5px;
  }

  h5 {
    color: #72abf2;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    color: #3d4550;
    margin: 10px 0;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    padding: 6px 0px;
    text-decoration: none;
    text-transform: capitalize;
    background-color: #72abf2;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    margin: 10px 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    span {
      margin-left: 5px;
    }
    &:hover {
      background-color: #aabffa;
      transition: all 0.3s linear;
    }
  }

  @media (max-width: 900px) {
    article {
      grid-template-columns: 1fr;
    }

    .info {
      padding: 0 10px;
    }
  }
`;

export default ListView;
