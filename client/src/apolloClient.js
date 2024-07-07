import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Ensure the endpoint is correct
  cache: new InMemoryCache(),
});

export default client;