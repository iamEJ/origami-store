import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { useProductsContext } from "./../context/productsContext";
import { single_product_url as url } from "./../utils/constans";
import { Error, Loading } from "./../components/index";

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

  return (
    <Wrapper>
      <h1>Single product {id}</h1>
    </Wrapper>
  );
}

const Wrapper = styled.main``;

export default SingleProductPage;
