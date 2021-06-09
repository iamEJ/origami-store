import { AiOutlineShoppingCart, AiFillBuild } from "react-icons/ai";
import { GiSwan } from "react-icons/gi";

export const links = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "About",
    url: "/about",
  },
  {
    id: 3,
    label: "Products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <AiOutlineShoppingCart />,
    title: "Buy Here",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 2,
    icon: <GiSwan />,
    title: "Order Custom",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    icon: <AiFillBuild />,
    title: "Learn Yourself",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

export const products_url =
  "https://serverless-functions-ej.netlify.app/api/complete";

export const single_product_url = `https://serverless-functions-ej.netlify.app/api/complete?id=`;
