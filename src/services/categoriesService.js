import { gql } from 'graphql-request'
import Client from './client';


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

   