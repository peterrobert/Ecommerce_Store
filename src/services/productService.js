import { gql, request } from "graphql-request";

import { GraphQLClient } from "graphql-request";
// <===== END POINT =====>
const endpoint = "http://localhost:4000/";

// <=== NEW CLIENT INSTANCE ====>
const Client = new GraphQLClient(endpoint, {
  method: "GET",
});

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
// <==== Fetch All Products ====>
const getAllProducts = async () => {
  const response = await Client.request(GET_PRODUCTS);
  return response;
};

// <==== FETCH SINGLE PRODUCT ====>
export const getSingleProduct = async (ID) => {
  // <==== QUERY ====>
  const query = gql`
    query getProduct($id: String!) {
      product(id: $id) {
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
          amount
        }
        brand
      }
    }
  `;

  const variables = {
    id: ID,
  };

  const response = await request(endpoint, query, variables);
  return response.product;
};

export default getAllProducts;
