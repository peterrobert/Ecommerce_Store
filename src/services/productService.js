import { gql } from "graphql-request";
import Client from "./client";

// <=== Query All Products ====>
let GET_PRODUCTS = gql`
  query {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        brand
        attributes {
          name
          type
          id
          items {
            displayValue
          }
        }
        prices {
          currency {
            label
          }
          amount
        }
      }
    }
  }
`;

// <=== Query Single Product ====>

const GET_SINGLE_PRODUCT = gql`
  query getProduct($id: String!) {
    product(id: $title) {
      name
      id
      inStock
      gallery
      description
      category
      attributes {
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
      }
      brand
    }
  }
`;

// <==== Fetch All Products ====>
const getAllProducts = async () => {
  const response = await Client.request(GET_PRODUCTS);
  return response;
};

// <==== FETCH SINGLE PRODUCT ====>
export const getSingleProduct = async (ID) => {
  const response = await Client.request(GET_SINGLE_PRODUCT, ID);
  return response;
};

export default getAllProducts;
