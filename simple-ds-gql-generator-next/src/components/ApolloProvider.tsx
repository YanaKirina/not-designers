'use client';

import { ApolloProvider as ApolloClientProvider } from '@apollo/client';
import { createApolloClient } from '@/lib/apollo-client';
import { ReactNode, useEffect, useState } from 'react';

interface ApolloProviderProps {
  children: ReactNode;
}

export const ApolloProvider = ({ children }: ApolloProviderProps) => {
  const [client, setClient] = useState<any>(null);

  useEffect(() => {
    const initClient = async () => {
      const apolloClient = createApolloClient();
      setClient(apolloClient);
    };

    initClient();
  }, []);

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <ApolloClientProvider client={client}>
      {children}
    </ApolloClientProvider>
  );
}; 