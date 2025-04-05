'use client';

import { gql, useQuery } from '@apollo/client';

const TEST_QUERY = gql`
  query TestQuery {
    searchOrganization(limit: 1) {
      elems {
        id
        name
      }
    }
  }
`;

export const TestQuery = () => {
  const { loading, error, data } = useQuery(TEST_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Test Query Results:</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}; 