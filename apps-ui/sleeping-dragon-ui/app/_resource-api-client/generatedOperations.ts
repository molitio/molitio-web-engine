import * as Types from './generatedTypes';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetResourceCollectionQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetResourceCollectionQuery = {
    __typename?: 'Query';
    resourceCollection: Array<{ __typename?: 'Resource'; _id: string; name: string; description?: string | null }>;
};

export const GetResourceCollectionDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'GetResourceCollection' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'resourceCollection' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<GetResourceCollectionQuery, GetResourceCollectionQueryVariables>;
