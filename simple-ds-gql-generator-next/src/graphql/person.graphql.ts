import * as Types from './__generate/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type PersonAttributesFragment = { __typename: '_E_Person', id: string, firstName: string, lastName: string, birthDate?: any | null };

export type CreatePersonMutationVariables = Types.Exact<{
  input: Types._CreatePersonInput;
}>;


export type CreatePersonMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createPerson?: { __typename: '_E_Person', id: string, firstName: string, lastName: string, birthDate?: any | null } | null } | null };

export const PersonAttributesFragmentDoc = gql`
    fragment PersonAttributes on _E_Person {
  id
  __typename
  firstName
  lastName
  birthDate
}
    `;
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