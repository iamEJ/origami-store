import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./../images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { links } from "./../utils/constans";
import CartButtons from "./CartButtons";
import { useProductsContext } from "./../context/productsContext";
import { useUserContext } from "../context/userContext";

function Navbar() {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Origami Gift" />
          </Link>
          <Button onClick={openSidebar}>
            <AiOutlineMenu />
          </Button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, label, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{label}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
  z-index: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1200px;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 200px;
    }
  }

  .nav-links {
    display: none;
  }

  .cart-btn-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      color: red;
      list-style-type: none;
      li {
        margin: 0 8px;
      }
      a {
        color: #4d4d4d;
        font-size: 16px;
        text-transform: capitalize;
        letter-spacing: 5px;
        padding: 8px;
        text-decoration: none;
        &:hover {
          border-bottom: 2px solid #72abf2;
        }
      }
    }
    .cart-btn-wrapper {
      display: block;
    }
  }
`;

const Button = styled.button`
  background: transparent;
  border: transparent;
  color: #4d4d4d;
  cursor: pointer;
  svg {
    font-size: 28px;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export default Navbar;
