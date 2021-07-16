import { useFilterContext } from "./../context/filterContext";
import { BsGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";

function Sort() {
  const {
    filteredProducts: products,
    gridView,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="btn-container">
        <button
          type="button"
          className={`${gridView ? "active" : null}`}
          onClick={setGridView}
        >
          <BsGridFill />
        </button>
        <button
          type="button"
          className={`${!gridView ? "active" : null}`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select name="sort" id="sort" value={sort} onChange={updateSort}>
          <option value="price-lowest">Price (lowest)</option>
          <option value="price-highest">Price (highest)</option>
          <option value="name-a">Name (A-Z)</option>
          <option value="name-z">Name (Z-A)</option>
        </select>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid #3d4550;
      color: #3d4550;
      width: 1.5rem;
      border-radius: 5px;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: #3d4550;
      color: #fff;
    }
  }

  p,
  label {
    color: #3d4550;
    text-transform: capitalize;
  }

  hr {
    border: none;
    border-top: 1px solid #72abf2;
  }

  label {
    margin-right: 5px;
  }

  select {
    border: none;
    color: #3d4550;
    font-size: 16px;
    outline: 0;
    cursor: pointer;
  }
  #sort > option {
    border: none;
    font-size: 16px;
  }
`;

export default Sort;
