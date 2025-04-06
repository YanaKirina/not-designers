import * as Types from '../../__generate/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PersonAttributesFragment = { __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string };

export type SearchPersonQueryVariables = Types.Exact<{
  cond?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type SearchPersonQuery = { __typename?: '_Query', searchPerson: { __typename?: '_EC_Person', elems: Array<{ __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string }> } };

export type GetForUpdatePersonMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetForUpdatePersonMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getPerson?: { __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string } | null } | null };

export type CreatePersonMutationVariables = Types.Exact<{
  input: Types._CreatePersonInput;
}>;


export type CreatePersonMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createPerson?: { __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string } | null } | null };

export type UpdatePersonMutationVariables = Types.Exact<{
  input: Types._UpdatePersonInput;
}>;


export type UpdatePersonMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updatePerson?: { __typename: '_E_Person', id: string, birthDate?: any | null, firstName: string, lastName: string } | null } | null };

export type DeletePersonMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type DeletePersonMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deletePerson?: string | null } | null };

export const PersonAttributesFragmentDoc = gql`
    fragment PersonAttributes on _E_Person {
  id
  __typename
  birthDate
  firstName
  lastName
}
    `;
export const SearchPersonDocument = gql`
    query searchPerson($cond: String) {
  searchPerson(cond: $cond) {
    elems {
      ...PersonAttributes
    }
  }
}
    ${PersonAttributesFragmentDoc}`;

/**
 * __useSearchPersonQuery__
 *
 * To run a query within a React component, call `useSearchPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPersonQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchPersonQuery(baseOptions?: Apollo.QueryHookOptions<SearchPersonQuery, SearchPersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPersonQuery, SearchPersonQueryVariables>(SearchPersonDocument, options);
      }
export function useSearchPersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPersonQuery, SearchPersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPersonQuery, SearchPersonQueryVariables>(SearchPersonDocument, options);
        }
export function useSearchPersonSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchPersonQuery, SearchPersonQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchPersonQuery, SearchPersonQueryVariables>(SearchPersonDocument, options);
        }
export type SearchPersonQueryHookResult = ReturnType<typeof useSearchPersonQuery>;
export type SearchPersonLazyQueryHookResult = ReturnType<typeof useSearchPersonLazyQuery>;
export type SearchPersonSuspenseQueryHookResult = ReturnType<typeof useSearchPersonSuspenseQuery>;
export type SearchPersonQueryResult = Apollo.QueryResult<SearchPersonQuery, SearchPersonQueryVariables>;
export const GetForUpdatePersonDocument = gql`
    mutation getForUpdatePerson($id: ID!) {
  packet {
    getPerson(id: $id) {
      ...PersonAttributes
    }
  }
}
    ${PersonAttributesFragmentDoc}`;
export type GetForUpdatePersonMutationFn = Apollo.MutationFunction<GetForUpdatePersonMutation, GetForUpdatePersonMutationVariables>;

/**
 * __useGetForUpdatePersonMutation__
 *
 * To run a mutation, you first call `useGetForUpdatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetForUpdatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getForUpdatePersonMutation, { data, loading, error }] = useGetForUpdatePersonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetForUpdatePersonMutation(baseOptions?: Apollo.MutationHookOptions<GetForUpdatePersonMutation, GetForUpdatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetForUpdatePersonMutation, GetForUpdatePersonMutationVariables>(GetForUpdatePersonDocument, options);
      }
export type GetForUpdatePersonMutationHookResult = ReturnType<typeof useGetForUpdatePersonMutation>;
export type GetForUpdatePersonMutationResult = Apollo.MutationResult<GetForUpdatePersonMutation>;
export type GetForUpdatePersonMutationOptions = Apollo.BaseMutationOptions<GetForUpdatePersonMutation, GetForUpdatePersonMutationVariables>;
export const CreatePersonDocument = gql`
    mutation createPerson($input: _CreatePersonInput!) {
  packet {
    createPerson(input: $input) {
      ...PersonAttributes
    }
  }
}
    ${PersonAttributesFragmentDoc}`;
export type CreatePersonMutationFn = Apollo.MutationFunction<CreatePersonMutation, CreatePersonMutationVariables>;

/**
 * __useCreatePersonMutation__
 *
 * To run a mutation, you first call `useCreatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPersonMutation, { data, loading, error }] = useCreatePersonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePersonMutation(baseOptions?: Apollo.MutationHookOptions<CreatePersonMutation, CreatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, options);
      }
export type CreatePersonMutationHookResult = ReturnType<typeof useCreatePersonMutation>;
export type CreatePersonMutationResult = Apollo.MutationResult<CreatePersonMutation>;
export type CreatePersonMutationOptions = Apollo.BaseMutationOptions<CreatePersonMutation, CreatePersonMutationVariables>;
export const UpdatePersonDocument = gql`
    mutation updatePerson($input: _UpdatePersonInput!) {
  packet {
    updatePerson(input: $input) {
      ...PersonAttributes
    }
  }
}
    ${PersonAttributesFragmentDoc}`;
export type UpdatePersonMutationFn = Apollo.MutationFunction<UpdatePersonMutation, UpdatePersonMutationVariables>;

/**
 * __useUpdatePersonMutation__
 *
 * To run a mutation, you first call `useUpdatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePersonMutation, { data, loading, error }] = useUpdatePersonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePersonMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePersonMutation, UpdatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePersonMutation, UpdatePersonMutationVariables>(UpdatePersonDocument, options);
      }
export type UpdatePersonMutationHookResult = ReturnType<typeof useUpdatePersonMutation>;
export type UpdatePersonMutationResult = Apollo.MutationResult<UpdatePersonMutation>;
export type UpdatePersonMutationOptions = Apollo.BaseMutationOptions<UpdatePersonMutation, UpdatePersonMutationVariables>;
export const DeletePersonDocument = gql`
    mutation deletePerson($id: ID!) {
  packet {
    deletePerson(id: $id)
  }
}
    `;
export type DeletePersonMutationFn = Apollo.MutationFunction<DeletePersonMutation, DeletePersonMutationVariables>;

/**
 * __useDeletePersonMutation__
 *
 * To run a mutation, you first call `useDeletePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePersonMutation, { data, loading, error }] = useDeletePersonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePersonMutation(baseOptions?: Apollo.MutationHookOptions<DeletePersonMutation, DeletePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePersonMutation, DeletePersonMutationVariables>(DeletePersonDocument, options);
      }
export type DeletePersonMutationHookResult = ReturnType<typeof useDeletePersonMutation>;
export type DeletePersonMutationResult = Apollo.MutationResult<DeletePersonMutation>;
export type DeletePersonMutationOptions = Apollo.BaseMutationOptions<DeletePersonMutation, DeletePersonMutationVariables>;