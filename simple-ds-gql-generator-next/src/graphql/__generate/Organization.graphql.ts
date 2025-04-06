import * as Types from '../../__generate/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type OrganizationAttributesFragment = { __typename: '_E_Organization', id: string, name: string };

export type SearchOrganizationQueryVariables = Types.Exact<{
  cond?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type SearchOrganizationQuery = { __typename?: '_Query', searchOrganization: { __typename?: '_EC_Organization', elems: Array<{ __typename: '_E_Organization', id: string, name: string }> } };

export type GetForUpdateOrganizationMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetForUpdateOrganizationMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getOrganization?: { __typename: '_E_Organization', id: string, name: string } | null } | null };

export type CreateOrganizationMutationVariables = Types.Exact<{
  input: Types._CreateOrganizationInput;
}>;


export type CreateOrganizationMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createOrganization?: { __typename: '_E_Organization', id: string, name: string } | null } | null };

export type UpdateOrganizationMutationVariables = Types.Exact<{
  input: Types._UpdateOrganizationInput;
}>;


export type UpdateOrganizationMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updateOrganization?: { __typename: '_E_Organization', id: string, name: string } | null } | null };

export type DeleteOrganizationMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type DeleteOrganizationMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deleteOrganization?: string | null } | null };

export const OrganizationAttributesFragmentDoc = gql`
    fragment OrganizationAttributes on _E_Organization {
  id
  __typename
  name
}
    `;
export const SearchOrganizationDocument = gql`
    query searchOrganization($cond: String) {
  searchOrganization(cond: $cond) {
    elems {
      ...OrganizationAttributes
    }
  }
}
    ${OrganizationAttributesFragmentDoc}`;

/**
 * __useSearchOrganizationQuery__
 *
 * To run a query within a React component, call `useSearchOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchOrganizationQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchOrganizationQuery(baseOptions?: Apollo.QueryHookOptions<SearchOrganizationQuery, SearchOrganizationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchOrganizationQuery, SearchOrganizationQueryVariables>(SearchOrganizationDocument, options);
      }
export function useSearchOrganizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchOrganizationQuery, SearchOrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchOrganizationQuery, SearchOrganizationQueryVariables>(SearchOrganizationDocument, options);
        }
export function useSearchOrganizationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchOrganizationQuery, SearchOrganizationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchOrganizationQuery, SearchOrganizationQueryVariables>(SearchOrganizationDocument, options);
        }
export type SearchOrganizationQueryHookResult = ReturnType<typeof useSearchOrganizationQuery>;
export type SearchOrganizationLazyQueryHookResult = ReturnType<typeof useSearchOrganizationLazyQuery>;
export type SearchOrganizationSuspenseQueryHookResult = ReturnType<typeof useSearchOrganizationSuspenseQuery>;
export type SearchOrganizationQueryResult = Apollo.QueryResult<SearchOrganizationQuery, SearchOrganizationQueryVariables>;
export const GetForUpdateOrganizationDocument = gql`
    mutation getForUpdateOrganization($id: ID!) {
  packet {
    getOrganization(id: $id) {
      ...OrganizationAttributes
    }
  }
}
    ${OrganizationAttributesFragmentDoc}`;
export type GetForUpdateOrganizationMutationFn = Apollo.MutationFunction<GetForUpdateOrganizationMutation, GetForUpdateOrganizationMutationVariables>;

/**
 * __useGetForUpdateOrganizationMutation__
 *
 * To run a mutation, you first call `useGetForUpdateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetForUpdateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getForUpdateOrganizationMutation, { data, loading, error }] = useGetForUpdateOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetForUpdateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<GetForUpdateOrganizationMutation, GetForUpdateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetForUpdateOrganizationMutation, GetForUpdateOrganizationMutationVariables>(GetForUpdateOrganizationDocument, options);
      }
export type GetForUpdateOrganizationMutationHookResult = ReturnType<typeof useGetForUpdateOrganizationMutation>;
export type GetForUpdateOrganizationMutationResult = Apollo.MutationResult<GetForUpdateOrganizationMutation>;
export type GetForUpdateOrganizationMutationOptions = Apollo.BaseMutationOptions<GetForUpdateOrganizationMutation, GetForUpdateOrganizationMutationVariables>;
export const CreateOrganizationDocument = gql`
    mutation createOrganization($input: _CreateOrganizationInput!) {
  packet {
    createOrganization(input: $input) {
      ...OrganizationAttributes
    }
  }
}
    ${OrganizationAttributesFragmentDoc}`;
export type CreateOrganizationMutationFn = Apollo.MutationFunction<CreateOrganizationMutation, CreateOrganizationMutationVariables>;

/**
 * __useCreateOrganizationMutation__
 *
 * To run a mutation, you first call `useCreateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrganizationMutation, { data, loading, error }] = useCreateOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrganizationMutation, CreateOrganizationMutationVariables>(CreateOrganizationDocument, options);
      }
export type CreateOrganizationMutationHookResult = ReturnType<typeof useCreateOrganizationMutation>;
export type CreateOrganizationMutationResult = Apollo.MutationResult<CreateOrganizationMutation>;
export type CreateOrganizationMutationOptions = Apollo.BaseMutationOptions<CreateOrganizationMutation, CreateOrganizationMutationVariables>;
export const UpdateOrganizationDocument = gql`
    mutation updateOrganization($input: _UpdateOrganizationInput!) {
  packet {
    updateOrganization(input: $input) {
      ...OrganizationAttributes
    }
  }
}
    ${OrganizationAttributesFragmentDoc}`;
export type UpdateOrganizationMutationFn = Apollo.MutationFunction<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;

/**
 * __useUpdateOrganizationMutation__
 *
 * To run a mutation, you first call `useUpdateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrganizationMutation, { data, loading, error }] = useUpdateOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>(UpdateOrganizationDocument, options);
      }
export type UpdateOrganizationMutationHookResult = ReturnType<typeof useUpdateOrganizationMutation>;
export type UpdateOrganizationMutationResult = Apollo.MutationResult<UpdateOrganizationMutation>;
export type UpdateOrganizationMutationOptions = Apollo.BaseMutationOptions<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;
export const DeleteOrganizationDocument = gql`
    mutation deleteOrganization($id: ID!) {
  packet {
    deleteOrganization(id: $id)
  }
}
    `;
export type DeleteOrganizationMutationFn = Apollo.MutationFunction<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;

/**
 * __useDeleteOrganizationMutation__
 *
 * To run a mutation, you first call `useDeleteOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrganizationMutation, { data, loading, error }] = useDeleteOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>(DeleteOrganizationDocument, options);
      }
export type DeleteOrganizationMutationHookResult = ReturnType<typeof useDeleteOrganizationMutation>;
export type DeleteOrganizationMutationResult = Apollo.MutationResult<DeleteOrganizationMutation>;
export type DeleteOrganizationMutationOptions = Apollo.BaseMutationOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;