import { useState } from "react";
import styled from "styled-components";

function ProductsImages({ images = [{ url: "" }] }) {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <img src={main.url} alt="Main Image" className="main" />
      <div className="gallery">
        {images.map((img, index) => {
          return (
            <img
              src={img.url}
              key={index}
              alt={img.filename}
              onClick={() => setMain(images[index])}
              className={`${img.url === main.url ? "active" : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: 5px;
    object-fit: cover;
  }

  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }

  .active {
    border: 2px solid #72abf2;
  }
`;

export default ProductsImages;
