import * as Types from './generatedTypes';

export type GetResourceCollectionQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetResourceCollectionQuery = {
    __typename?: 'Query';
    resourceCollection: Array<{ __typename?: 'Resource'; _id: string; name: string; description?: string | null }>;
};
