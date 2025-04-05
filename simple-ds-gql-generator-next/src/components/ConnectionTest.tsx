'use client';

import { useEffect, useState } from 'react';

export const ConnectionTest = () => {
  const [status, setStatus] = useState<'checking' | 'success' | 'error'>('checking');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || '/graphql', {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
          body: JSON.stringify({
            query: `
              query {
                searchOrganization(limit: 1) {
                  elems {
                    id
                    name
                  }
                }
              }
            `,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        setStatus('success');
        console.log('GraphQL response:', data);
      } catch (err) {
        setStatus('error');
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error('Connection error:', err);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2">GraphQL Connection Status:</h3>
      {status === 'checking' && (
        <div className="flex items-center text-yellow-600">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600 mr-2"></div>
          Checking connection...
        </div>
      )}
      {status === 'success' && (
        <div className="text-green-600">✓ Connected successfully</div>
      )}
      {status === 'error' && (
        <div className="text-red-600">
          ✗ Connection failed: {error}
          <div className="mt-2 text-sm">
            Please check if your GraphQL server is running at:{' '}
            <code className="bg-gray-100 p-1 rounded">
              {process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || '/graphql'}
            </code>
          </div>
          <div className="mt-2 text-sm">
            If you see a CORS error, you need to configure CORS on your GraphQL server to allow requests from:{' '}
            <code className="bg-gray-100 p-1 rounded">
              http://localhost:3001
            </code>
          </div>
        </div>
      )}
    </div>
  );
}; 