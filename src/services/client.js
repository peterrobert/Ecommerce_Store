import { GraphQLClient} from 'graphql-request'
// <===== END POINT =====> 
const endpoint = "http://localhost:4000/";

// <=== NEW CLIENT INSTANCE ====> 
const Client = new GraphQLClient(endpoint, {
    method: 'GET',
})

export default Client


