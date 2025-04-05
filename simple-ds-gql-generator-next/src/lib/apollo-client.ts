import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'api/graphql',
  fetchOptions: {
    mode: 'cors',
    credentials: 'include',
  },
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    // 'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
      addTypename: false
    }),
  });
}; 