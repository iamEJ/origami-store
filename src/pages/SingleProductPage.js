import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { useProductsContext } from "./../context/productsContext";
import { single_product_url as url } from "./../utils/constans";
import {
  AddToCart,
  Error,
  Loading,
  PageHero,
  ProductsImages,
  Stars,
} from "./../components/index";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

function SingleProductPage() {
  const { id } = useParams();
  const history = useHistory();
  const {
    singleProductLoading: loading,
    singleProductError: error,
    singleProduct: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  console.log(product);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    description,
    price,
    difficulty,
    image,
    color,
    category,
    shipping,
    stock,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products">
          <AiOutlineLeft /> <span>back to products</span>
        </Link>
        <div className="products-center">
          <ProductsImages />
          <section className="content">
            <h1>{name}</h1>
            <Stars />
            <h3>€ {price}.00</h3>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="info">
              <span>Category : </span>
              {category}
            </p>
            <p className="info">
              <span>shipping : </span>
              {shipping ? "Free" : "€ 2.00"}
            </p>
            <hr />
            {stock > 0 && <AddToCart />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  div a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    padding: 6px 0px;
    text-decoration: none;
    text-transform: capitalize;
    background-color: #72abf2;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    span {
      margin-left: 5px;
    }
    &:hover {
      background-color: #aabffa;
      transition: all 0.3s linear;
    }
  }

  .products-center {
    display: grid;
    gap: 50px;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
  }

  .content {
    h1 {
      color: #3d4550;
      font-size: 60px;
      font-family: "EB Garamond", serif;
      letter-spacing: 5px;
    }
    h3 {
      color: #72abf2;
      padding: 10px 0;
    }
  }

  .desc {
    color: #3d4550;
    margin-bottom: 30px;
    line-height: 2;
  }

  .info {
    text-transform: capitalize;
    color: #3d4550;
    margin-bottom: 20px;
    span {
      font-weight: bold;
      padding-right: 50px;
    }
  }

  @media (max-width: 900px) {
    .products-center {
      grid-template-columns: 1fr;
    }
  }
`;

export default SingleProductPage;
