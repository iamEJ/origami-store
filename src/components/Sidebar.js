import styled from "styled-components";
import { links } from "./../utils/constans";
import logo from "./../images/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartButtons from "./CartButtons";
import { useProductsContext } from "./../context/productsContext";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  console.log(isSidebarOpen);

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"} `}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="Origami Gift" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <AiOutlineClose />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, url, label }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout" onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
  }
  .close-btn {
    font-size: 24px;
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
    color: #4d4d4d;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: #72abf2;
  }

  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 32px;
  }
  .links a {
    display: flex;
    justify-content: center;
    text-align: left;
    font-size: 16px;
    text-transform: capitalize;
    padding: 16px 24px;
    color: #4d4d4d;
    transition: all 0.3s linear;
    letter-spacing: 3px;
    text-decoration: none;
  }
  .links a:hover {
    padding: 16px 24px;
    padding-left: 32px;
    background: #aabffa;
    color: #fff;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 32px auto;
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
