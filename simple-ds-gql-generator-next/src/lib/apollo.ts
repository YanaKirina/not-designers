import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:8080/models/1/graphql',
  cache: new InMemoryCache(),
}); 