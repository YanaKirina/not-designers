import * as Types from '../../__generate/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type EventAttributesFragment = { __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } };

export type SearchEventQueryVariables = Types.Exact<{
  cond?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type SearchEventQuery = { __typename?: '_Query', searchEvent: { __typename?: '_EC_Event', elems: Array<{ __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } }> } };

export type GetForUpdateEventMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetForUpdateEventMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', getEvent?: { __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } } | null } | null };

export type CreateEventMutationVariables = Types.Exact<{
  input: Types._CreateEventInput;
}>;


export type CreateEventMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createEvent?: { __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } } | null } | null };

export type UpdateEventMutationVariables = Types.Exact<{
  input: Types._UpdateEventInput;
}>;


export type UpdateEventMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', updateEvent?: { __typename: '_E_Event', id: string, description: string, endDateTime?: any | null, startDateTime?: any | null, aggregateRoot?: { __typename?: '_E_Organization', id: string } | null, organization: { __typename?: '_E_Organization', id: string }, statusForX: { __typename?: '_G_SysStatusFields', code?: string | null, reason?: string | null } } | null } | null };

export type DeleteEventMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type DeleteEventMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', deleteEvent?: string | null } | null };

export const EventAttributesFragmentDoc = gql`
    fragment EventAttributes on _E_Event {
  id
  __typename
  aggregateRoot {
    id
  }
  description
  endDateTime
  organization {
    id
  }
  startDateTime
  statusForX {
    code
    reason
  }
}
    `;
export const SearchEventDocument = gql`
    query searchEvent($cond: String) {
  searchEvent(cond: $cond) {
    elems {
      ...EventAttributes
    }
  }
}
    ${EventAttributesFragmentDoc}`;

/**
 * __useSearchEventQuery__
 *
 * To run a query within a React component, call `useSearchEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchEventQuery({
 *   variables: {
 *      cond: // value for 'cond'
 *   },
 * });
 */
export function useSearchEventQuery(baseOptions?: Apollo.QueryHookOptions<SearchEventQuery, SearchEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchEventQuery, SearchEventQueryVariables>(SearchEventDocument, options);
      }
export function useSearchEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchEventQuery, SearchEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchEventQuery, SearchEventQueryVariables>(SearchEventDocument, options);
        }
export function useSearchEventSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchEventQuery, SearchEventQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchEventQuery, SearchEventQueryVariables>(SearchEventDocument, options);
        }
export type SearchEventQueryHookResult = ReturnType<typeof useSearchEventQuery>;
export type SearchEventLazyQueryHookResult = ReturnType<typeof useSearchEventLazyQuery>;
export type SearchEventSuspenseQueryHookResult = ReturnType<typeof useSearchEventSuspenseQuery>;
export type SearchEventQueryResult = Apollo.QueryResult<SearchEventQuery, SearchEventQueryVariables>;
export const GetForUpdateEventDocument = gql`
    mutation getForUpdateEvent($id: ID!) {
  packet {
    getEvent(id: $id) {
      ...EventAttributes
    }
  }
}
    ${EventAttributesFragmentDoc}`;
export type GetForUpdateEventMutationFn = Apollo.MutationFunction<GetForUpdateEventMutation, GetForUpdateEventMutationVariables>;

/**
 * __useGetForUpdateEventMutation__
 *
 * To run a mutation, you first call `useGetForUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetForUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getForUpdateEventMutation, { data, loading, error }] = useGetForUpdateEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetForUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<GetForUpdateEventMutation, GetForUpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetForUpdateEventMutation, GetForUpdateEventMutationVariables>(GetForUpdateEventDocument, options);
      }
export type GetForUpdateEventMutationHookResult = ReturnType<typeof useGetForUpdateEventMutation>;
export type GetForUpdateEventMutationResult = Apollo.MutationResult<GetForUpdateEventMutation>;
export type GetForUpdateEventMutationOptions = Apollo.BaseMutationOptions<GetForUpdateEventMutation, GetForUpdateEventMutationVariables>;
export const CreateEventDocument = gql`
    mutation createEvent($input: _CreateEventInput!) {
  packet {
    createEvent(input: $input) {
      ...EventAttributes
    }
  }
}
    ${EventAttributesFragmentDoc}`;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const UpdateEventDocument = gql`
    mutation updateEvent($input: _UpdateEventInput!) {
  packet {
    updateEvent(input: $input) {
      ...EventAttributes
    }
  }
}
    ${EventAttributesFragmentDoc}`;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, options);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const DeleteEventDocument = gql`
    mutation deleteEvent($id: ID!) {
  packet {
    deleteEvent(id: $id)
  }
}
    `;
export type DeleteEventMutationFn = Apollo.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, options);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = Apollo.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = Apollo.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;