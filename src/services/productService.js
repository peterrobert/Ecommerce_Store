import { gql } from "graphql-request";
import Client from "./client";

// <=== Query ====>
const GET_PRODUCTS = gql`
  query ($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        category
        inStock
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;
// <==== Fetch All Products ====>
const getAllProducts = async (tab) => {
  const response = await Client.request(GET_PRODUCTS, tab);
  return response;
};

export default getAllProducts;
