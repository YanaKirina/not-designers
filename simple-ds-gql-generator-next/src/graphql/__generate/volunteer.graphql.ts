import * as Types from '../../__generate/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VolonteerAttributesFragment = { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } };

export type SearchVolonteerQueryVariables = Types.Exact<{
  cond?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type SearchVolonteerQuery = { __typename?: '_Query', searchVolonteer: { __typename?: '_EC_Volonteer', elems: Array<{ __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } }> } };

export type GetForUpdateVolonteerMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetForUpdateVolonteerMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getVolonteer?: { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } } | null } | null };

export type CreateVolonteerMutationVariables = Types.Exact<{
  input: Types._CreateVolonteerInput;
}>;


export type CreateVolonteerMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createVolonteer?: { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } } | null } | null };

export type UpdateVolonteerMutationVariables = Types.Exact<{
  input: Types._UpdateVolonteerInput;
}>;


export type UpdateVolonteerMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updateVolonteer?: { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } } | null } | null };

export type DeleteVolonteerMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type DeleteVolonteerMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deleteVolonteer?: string | null } | null };

export const VolonteerAttributesFragmentDoc = gql`
    fragment VolonteerAttributes on _E_Volonteer {
  id
  __typename
  nickName
  person {
    entityId
  }
}
    `;
export const SearchVolonteerDocument = gql`
    query searchVolonteer($cond: String) {
  searchVolonteer(cond: $cond) {
    elems {
      ...VolonteerAttributes
    }
  }
}
    ${VolonteerAttributesFragmentDoc}`;

/**
 * __useSearchVolonteerQuery__
 *
 * To run a query within a React component, call `useSearchVolonteerQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchVolonteerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchVolonteerQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchVolonteerQuery(baseOptions?: Apollo.QueryHookOptions<SearchVolonteerQuery, SearchVolonteerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchVolonteerQuery, SearchVolonteerQueryVariables>(SearchVolonteerDocument, options);
      }
export function useSearchVolonteerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchVolonteerQuery, SearchVolonteerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchVolonteerQuery, SearchVolonteerQueryVariables>(SearchVolonteerDocument, options);
        }
export function useSearchVolonteerSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchVolonteerQuery, SearchVolonteerQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchVolonteerQuery, SearchVolonteerQueryVariables>(SearchVolonteerDocument, options);
        }
export type SearchVolonteerQueryHookResult = ReturnType<typeof useSearchVolonteerQuery>;
export type SearchVolonteerLazyQueryHookResult = ReturnType<typeof useSearchVolonteerLazyQuery>;
export type SearchVolonteerSuspenseQueryHookResult = ReturnType<typeof useSearchVolonteerSuspenseQuery>;
export type SearchVolonteerQueryResult = Apollo.QueryResult<SearchVolonteerQuery, SearchVolonteerQueryVariables>;
export const GetForUpdateVolonteerDocument = gql`
    mutation getForUpdateVolonteer($id: ID!) {
  packet {
    getVolonteer(id: $id) {
      ...VolonteerAttributes
    }
  }
}
    ${VolonteerAttributesFragmentDoc}`;
export type GetForUpdateVolonteerMutationFn = Apollo.MutationFunction<GetForUpdateVolonteerMutation, GetForUpdateVolonteerMutationVariables>;

/**
 * __useGetForUpdateVolonteerMutation__
 *
 * To run a mutation, you first call `useGetForUpdateVolonteerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetForUpdateVolonteerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getForUpdateVolonteerMutation, { data, loading, error }] = useGetForUpdateVolonteerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetForUpdateVolonteerMutation(baseOptions?: Apollo.MutationHookOptions<GetForUpdateVolonteerMutation, GetForUpdateVolonteerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetForUpdateVolonteerMutation, GetForUpdateVolonteerMutationVariables>(GetForUpdateVolonteerDocument, options);
      }
export type GetForUpdateVolonteerMutationHookResult = ReturnType<typeof useGetForUpdateVolonteerMutation>;
export type GetForUpdateVolonteerMutationResult = Apollo.MutationResult<GetForUpdateVolonteerMutation>;
export type GetForUpdateVolonteerMutationOptions = Apollo.BaseMutationOptions<GetForUpdateVolonteerMutation, GetForUpdateVolonteerMutationVariables>;
export const CreateVolonteerDocument = gql`
    mutation createVolonteer($input: _CreateVolonteerInput!) {
  packet {
    createVolonteer(input: $input) {
      ...VolonteerAttributes
    }
  }
}
    ${VolonteerAttributesFragmentDoc}`;
export type CreateVolonteerMutationFn = Apollo.MutationFunction<CreateVolonteerMutation, CreateVolonteerMutationVariables>;

/**
 * __useCreateVolonteerMutation__
 *
 * To run a mutation, you first call `useCreateVolonteerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVolonteerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVolonteerMutation, { data, loading, error }] = useCreateVolonteerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVolonteerMutation(baseOptions?: Apollo.MutationHookOptions<CreateVolonteerMutation, CreateVolonteerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVolonteerMutation, CreateVolonteerMutationVariables>(CreateVolonteerDocument, options);
      }
export type CreateVolonteerMutationHookResult = ReturnType<typeof useCreateVolonteerMutation>;
export type CreateVolonteerMutationResult = Apollo.MutationResult<CreateVolonteerMutation>;
export type CreateVolonteerMutationOptions = Apollo.BaseMutationOptions<CreateVolonteerMutation, CreateVolonteerMutationVariables>;
export const UpdateVolonteerDocument = gql`
    mutation updateVolonteer($input: _UpdateVolonteerInput!) {
  packet {
    updateVolonteer(input: $input) {
      ...VolonteerAttributes
    }
  }
}
    ${VolonteerAttributesFragmentDoc}`;
export type UpdateVolonteerMutationFn = Apollo.MutationFunction<UpdateVolonteerMutation, UpdateVolonteerMutationVariables>;

/**
 * __useUpdateVolonteerMutation__
 *
 * To run a mutation, you first call `useUpdateVolonteerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVolonteerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVolonteerMutation, { data, loading, error }] = useUpdateVolonteerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVolonteerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVolonteerMutation, UpdateVolonteerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVolonteerMutation, UpdateVolonteerMutationVariables>(UpdateVolonteerDocument, options);
      }
export type UpdateVolonteerMutationHookResult = ReturnType<typeof useUpdateVolonteerMutation>;
export type UpdateVolonteerMutationResult = Apollo.MutationResult<UpdateVolonteerMutation>;
export type UpdateVolonteerMutationOptions = Apollo.BaseMutationOptions<UpdateVolonteerMutation, UpdateVolonteerMutationVariables>;
export const DeleteVolonteerDocument = gql`
    mutation deleteVolonteer($id: ID!) {
  packet {
    deleteVolonteer(id: $id)
  }
}
    `;
export type DeleteVolonteerMutationFn = Apollo.MutationFunction<DeleteVolonteerMutation, DeleteVolonteerMutationVariables>;

/**
 * __useDeleteVolonteerMutation__
 *
 * To run a mutation, you first call `useDeleteVolonteerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVolonteerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVolonteerMutation, { data, loading, error }] = useDeleteVolonteerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteVolonteerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVolonteerMutation, DeleteVolonteerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVolonteerMutation, DeleteVolonteerMutationVariables>(DeleteVolonteerDocument, options);
      }
export type DeleteVolonteerMutationHookResult = ReturnType<typeof useDeleteVolonteerMutation>;
export type DeleteVolonteerMutationResult = Apollo.MutationResult<DeleteVolonteerMutation>;
export type DeleteVolonteerMutationOptions = Apollo.BaseMutationOptions<DeleteVolonteerMutation, DeleteVolonteerMutationVariables>;