import * as Types from '../__generate/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VolonteerEventRequestAttributesFragment = { __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } };

export type SearchVolonteerEventRequestQueryVariables = Types.Exact<{
  cond?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type SearchVolonteerEventRequestQuery = { __typename?: '_Query', searchVolonteerEventRequest: { __typename?: '_EC_VolonteerEventRequest', elems: Array<{ __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } }> } };

export type GetForUpdateVolonteerEventRequestMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetForUpdateVolonteerEventRequestMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getVolonteerEventRequest?: { __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } } | null } | null };

export type CreateVolonteerEventRequestMutationVariables = Types.Exact<{
  input: Types._CreateVolonteerEventRequestInput;
}>;


export type CreateVolonteerEventRequestMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createVolonteerEventRequest?: { __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } } | null } | null };

export type UpdateVolonteerEventRequestMutationVariables = Types.Exact<{
  input: Types._UpdateVolonteerEventRequestInput;
}>;


export type UpdateVolonteerEventRequestMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updateVolonteerEventRequest?: { __typename: '_E_VolonteerEventRequest', id: string, description?: string | null, aggregateRoot?: { __typename?: '_E_Volonteer', id: string } | null, event: { __typename?: '_G_EventReference', entityId?: string | null }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null }, volonteer: { __typename?: '_E_Volonteer', id: string } } | null } | null };

export type DeleteVolonteerEventRequestMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type DeleteVolonteerEventRequestMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deleteVolonteerEventRequest?: string | null } | null };

export const VolonteerEventRequestAttributesFragmentDoc = gql`
    fragment VolonteerEventRequestAttributes on _E_VolonteerEventRequest {
  id
  __typename
  aggregateRoot {
    id
  }
  description
  event {
    entityId
  }
  statusForX {
    code
    reason
  }
  volonteer {
    id
  }
}
    `;
export const SearchVolonteerEventRequestDocument = gql`
    query searchVolonteerEventRequest($cond: String) {
  searchVolonteerEventRequest(cond: $cond) {
    elems {
      ...VolonteerEventRequestAttributes
    }
  }
}
    ${VolonteerEventRequestAttributesFragmentDoc}`;

/**
 * __useSearchVolonteerEventRequestQuery__
 *
 * To run a query within a React component, call `useSearchVolonteerEventRequestQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchVolonteerEventRequestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchVolonteerEventRequestQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchVolonteerEventRequestQuery(baseOptions?: Apollo.QueryHookOptions<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>(SearchVolonteerEventRequestDocument, options);
      }
export function useSearchVolonteerEventRequestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>(SearchVolonteerEventRequestDocument, options);
        }
export function useSearchVolonteerEventRequestSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>(SearchVolonteerEventRequestDocument, options);
        }
export type SearchVolonteerEventRequestQueryHookResult = ReturnType<typeof useSearchVolonteerEventRequestQuery>;
export type SearchVolonteerEventRequestLazyQueryHookResult = ReturnType<typeof useSearchVolonteerEventRequestLazyQuery>;
export type SearchVolonteerEventRequestSuspenseQueryHookResult = ReturnType<typeof useSearchVolonteerEventRequestSuspenseQuery>;
export type SearchVolonteerEventRequestQueryResult = Apollo.QueryResult<SearchVolonteerEventRequestQuery, SearchVolonteerEventRequestQueryVariables>;
export const GetForUpdateVolonteerEventRequestDocument = gql`
    mutation getForUpdateVolonteerEventRequest($id: ID!) {
  packet {
    getVolonteerEventRequest(id: $id) {
      ...VolonteerEventRequestAttributes
    }
  }
}
    ${VolonteerEventRequestAttributesFragmentDoc}`;
export type GetForUpdateVolonteerEventRequestMutationFn = Apollo.MutationFunction<GetForUpdateVolonteerEventRequestMutation, GetForUpdateVolonteerEventRequestMutationVariables>;

/**
 * __useGetForUpdateVolonteerEventRequestMutation__
 *
 * To run a mutation, you first call `useGetForUpdateVolonteerEventRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetForUpdateVolonteerEventRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getForUpdateVolonteerEventRequestMutation, { data, loading, error }] = useGetForUpdateVolonteerEventRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetForUpdateVolonteerEventRequestMutation(baseOptions?: Apollo.MutationHookOptions<GetForUpdateVolonteerEventRequestMutation, GetForUpdateVolonteerEventRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetForUpdateVolonteerEventRequestMutation, GetForUpdateVolonteerEventRequestMutationVariables>(GetForUpdateVolonteerEventRequestDocument, options);
      }
export type GetForUpdateVolonteerEventRequestMutationHookResult = ReturnType<typeof useGetForUpdateVolonteerEventRequestMutation>;
export type GetForUpdateVolonteerEventRequestMutationResult = Apollo.MutationResult<GetForUpdateVolonteerEventRequestMutation>;
export type GetForUpdateVolonteerEventRequestMutationOptions = Apollo.BaseMutationOptions<GetForUpdateVolonteerEventRequestMutation, GetForUpdateVolonteerEventRequestMutationVariables>;
export const CreateVolonteerEventRequestDocument = gql`
    mutation createVolonteerEventRequest($input: _CreateVolonteerEventRequestInput!) {
  packet {
    createVolonteerEventRequest(input: $input) {
      ...VolonteerEventRequestAttributes
    }
  }
}
    ${VolonteerEventRequestAttributesFragmentDoc}`;
export type CreateVolonteerEventRequestMutationFn = Apollo.MutationFunction<CreateVolonteerEventRequestMutation, CreateVolonteerEventRequestMutationVariables>;

/**
 * __useCreateVolonteerEventRequestMutation__
 *
 * To run a mutation, you first call `useCreateVolonteerEventRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVolonteerEventRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVolonteerEventRequestMutation, { data, loading, error }] = useCreateVolonteerEventRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVolonteerEventRequestMutation(baseOptions?: Apollo.MutationHookOptions<CreateVolonteerEventRequestMutation, CreateVolonteerEventRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVolonteerEventRequestMutation, CreateVolonteerEventRequestMutationVariables>(CreateVolonteerEventRequestDocument, options);
      }
export type CreateVolonteerEventRequestMutationHookResult = ReturnType<typeof useCreateVolonteerEventRequestMutation>;
export type CreateVolonteerEventRequestMutationResult = Apollo.MutationResult<CreateVolonteerEventRequestMutation>;
export type CreateVolonteerEventRequestMutationOptions = Apollo.BaseMutationOptions<CreateVolonteerEventRequestMutation, CreateVolonteerEventRequestMutationVariables>;
export const UpdateVolonteerEventRequestDocument = gql`
    mutation updateVolonteerEventRequest($input: _UpdateVolonteerEventRequestInput!) {
  packet {
    updateVolonteerEventRequest(input: $input) {
      ...VolonteerEventRequestAttributes
    }
  }
}
    ${VolonteerEventRequestAttributesFragmentDoc}`;
export type UpdateVolonteerEventRequestMutationFn = Apollo.MutationFunction<UpdateVolonteerEventRequestMutation, UpdateVolonteerEventRequestMutationVariables>;

/**
 * __useUpdateVolonteerEventRequestMutation__
 *
 * To run a mutation, you first call `useUpdateVolonteerEventRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVolonteerEventRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVolonteerEventRequestMutation, { data, loading, error }] = useUpdateVolonteerEventRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVolonteerEventRequestMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVolonteerEventRequestMutation, UpdateVolonteerEventRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVolonteerEventRequestMutation, UpdateVolonteerEventRequestMutationVariables>(UpdateVolonteerEventRequestDocument, options);
      }
export type UpdateVolonteerEventRequestMutationHookResult = ReturnType<typeof useUpdateVolonteerEventRequestMutation>;
export type UpdateVolonteerEventRequestMutationResult = Apollo.MutationResult<UpdateVolonteerEventRequestMutation>;
export type UpdateVolonteerEventRequestMutationOptions = Apollo.BaseMutationOptions<UpdateVolonteerEventRequestMutation, UpdateVolonteerEventRequestMutationVariables>;
export const DeleteVolonteerEventRequestDocument = gql`
    mutation deleteVolonteerEventRequest($id: ID!) {
  packet {
    deleteVolonteerEventRequest(id: $id)
  }
}
    `;
export type DeleteVolonteerEventRequestMutationFn = Apollo.MutationFunction<DeleteVolonteerEventRequestMutation, DeleteVolonteerEventRequestMutationVariables>;

/**
 * __useDeleteVolonteerEventRequestMutation__
 *
 * To run a mutation, you first call `useDeleteVolonteerEventRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVolonteerEventRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVolonteerEventRequestMutation, { data, loading, error }] = useDeleteVolonteerEventRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteVolonteerEventRequestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVolonteerEventRequestMutation, DeleteVolonteerEventRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVolonteerEventRequestMutation, DeleteVolonteerEventRequestMutationVariables>(DeleteVolonteerEventRequestDocument, options);
      }
export type DeleteVolonteerEventRequestMutationHookResult = ReturnType<typeof useDeleteVolonteerEventRequestMutation>;
export type DeleteVolonteerEventRequestMutationResult = Apollo.MutationResult<DeleteVolonteerEventRequestMutation>;
export type DeleteVolonteerEventRequestMutationOptions = Apollo.BaseMutationOptions<DeleteVolonteerEventRequestMutation, DeleteVolonteerEventRequestMutationVariables>;