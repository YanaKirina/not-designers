import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || 'http://localhost:8080/graphql',
  fetchOptions: {
    mode: 'cors',
    credentials: 'omit',
  },
  headers: {
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

// Отдельный клиент для API-маршрутов
export const createApiApolloClient = () => {
  const apiHttpLink = createHttpLink({
    uri: process.env.GRAPHQL_API_URL || 'http://localhost:8080/graphql',
    fetchOptions: {
      mode: 'cors',
      credentials: 'omit',
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  return new ApolloClient({
    link: apiHttpLink,
    cache: new InMemoryCache({
      addTypename: false
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
      },
      query: {
        fetchPolicy: 'no-cache',
      },
      mutate: {
        fetchPolicy: 'no-cache',
      },
    },
  });
}; 