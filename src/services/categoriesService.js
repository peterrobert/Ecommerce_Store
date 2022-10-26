import { gql } from 'graphql-request'

import { GraphQLClient} from 'graphql-request'
// <===== END POINT =====> 
const endpoint = "http://localhost:4000/";

// <=== NEW CLIENT INSTANCE ====> 
const Client = new GraphQLClient(endpoint, {
    method: 'GET',
})


// <=== Query ====> 
const GET_CATEGORIES = gql`
  query {
    categories {
      name
    },
    currencies{
      label,
      symbol
    }
  }
`;


// <=== Get All Categories ====> 
const getAllCategories = async () => {
    const response = await Client.request(GET_CATEGORIES)
    return response
}

export default getAllCategories

   