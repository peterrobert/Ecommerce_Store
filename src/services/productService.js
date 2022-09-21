import { gql } from "graphql-request";
import Client from "./client";


// <=== Query ====>
let GET_PRODUCTS = gql`
 query {
  categories{
    name,
    products{
      id,
      name,
      inStock,
      gallery,
      prices{
        currency{
         symbol 
        },
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

export default getAllProducts;
