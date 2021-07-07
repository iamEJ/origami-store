import styled from "styled-components";
import { useFilterContext } from "../context/filterContext";
import { getUniqueValues } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

function Filters() {
  const {
    filters: { text, category, price, shipping, color, minPrice, maxPrice },
    updateFilters,
    allProducts,
    clearFilters,
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, "category");
  const colors = getUniqueValues(allProducts, "color");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="container">
            <input
              type="text"
              name="text"
              placeholder="Search products"
              className="search-input"
              value={text}
              onChange={updateFilters}
              autoComplete="off"
            />
          </div>
          <div className="container-category">
            <h3>Category</h3>
            {categories.map((cat, index) => {
              return (
                <button
                  key={index}
                  onClick={updateFilters}
                  name="category"
                  type="button"
                  className={`${
                    category === cat.toLowerCase() ? "active" : null
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <div className="container">
            <h3>Colors</h3>
            <div className="colors">
              {colors.map((col, index) => {
                if (col === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: col }}
                    className={`${
                      color === col ? "color-btn active-color" : "color-btn"
                    }`}
                    data-color={col}
                    onClick={updateFilters}
                  >
                    {color === col ? <FaCheck /> : ""}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="container-price">
            <h3>Price</h3>
            <p>€{price}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={minPrice}
              max={maxPrice}
              value={price}
              className="slider"
            />
          </div>
          <div className="container shipping">
            <label htmlFor="shipping">Free Shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
        </form>
        <button
          type="button"
          className="btn-hover color-1"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .search-input {
    background: #f1f5f8;
    border: none;
    padding: 10px;
    outline: 0;
    border-radius: 5px;
  }

  h3 {
    color: #72abf2;
    padding: 10px 0 5px 0;
  }

  label {
    font-weight: bold;
    color: #72abf2;
    margin-right: 5px;
  }
  .container-category {
    display: flex;
    flex-direction: column;
    button {
      background: none;
      border: none;
      cursor: pointer;
      text-align: left;
      text-transform: capitalize;
      padding: 3px 0;
      font-size: 15px;
      color: #3d4550;
    }
  }

  .all-btn {
    border: none;
    background: none;
    margin-right: 10px;
    margin-bottom: 5px;
    color: #3d4550;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
  }

  .active {
    font-weight: bold;
  }

  .colors {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .color-btn {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #222;
    margin-right: 10px;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgrey;
    margin-bottom: 5px;
    svg {
      font-size: 0.5rem;
      color: #fff;
    }
  }
  .active-color {
    opacity: 1;
    border: 1px solid #222;
  }

  .container-price {
    p {
      color: #3d4550;
    }
  }
  .slider {
    -webkit-appearance: none;
    width: 80%;
    height: 10px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    margin-bottom: 20px;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #72abf2;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #72abf2;
    cursor: pointer;
  }

  .btn-hover {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
    padding: 10px 15px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 3px;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .btn-hover:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .btn-hover:focus {
    outline: none;
  }

  .btn-hover.color-1 {
    background-image: linear-gradient(
      to right,
      #25aae1,
      #4481eb,
      #04befe,
      #3f86ed
    );
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
