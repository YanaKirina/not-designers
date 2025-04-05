import * as Types from './__generate/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type VolonteerAttributesFragment = { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } };

export type CreateVolonteerMutationVariables = Types.Exact<{
  input: Types._CreateVolonteerInput;
}>;


export type CreateVolonteerMutation = { __typename?: '_Mutation', packet?: { __typename?: '_Packet', createVolonteer?: { __typename: '_E_Volonteer', id: string, nickName?: string | null, person: { __typename?: '_G_PersonReference', entityId?: string | null } } | null } | null };

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