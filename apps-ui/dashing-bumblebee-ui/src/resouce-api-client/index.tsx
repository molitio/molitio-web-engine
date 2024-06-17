export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type LabelValue = {
  __typename?: 'LabelValue';
  _id: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  createdBy: Scalars['String']['output'];
  unitOfMesure: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createResource: Resource;
  createSpecificationLabel: SpecificationLabel;
  createUserPrivate: UserPrivate;
  createUserPublic: UserPublic;
  deleteResource: Resource;
  deleteSpecificationLabel: SpecificationLabel;
  deleteUserPrivate: UserPrivate;
  deleteUserPublic: UserPublic;
  updateResource: Resource;
  updateSpecificationLabel: SpecificationLabel;
  updateUserPrivate: UserPrivate;
  updateUserPublic: UserPublic;
};


export type MutationCreateResourceArgs = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateSpecificationLabelArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  labelValue: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreateUserPrivateArgs = {
  resourceCollectionId?: InputMaybe<Scalars['String']['input']>;
  userPersistedConfigId?: InputMaybe<Scalars['String']['input']>;
  usernamePublic: Scalars['String']['input'];
};


export type MutationCreateUserPublicArgs = {
  resourceCollectionId?: InputMaybe<Scalars['String']['input']>;
  userPersistedConfigId?: InputMaybe<Scalars['String']['input']>;
  usernamePublic: Scalars['String']['input'];
};


export type MutationDeleteResourceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSpecificationLabelArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserPrivateArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserPublicArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateResourceArgs = {
  _id: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationUpdateSpecificationLabelArgs = {
  _id: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationUpdateUserPrivateArgs = {
  id: Scalars['String']['input'];
  resourceCollectionId?: InputMaybe<Scalars['String']['input']>;
  userPersistedConfigId?: InputMaybe<Scalars['String']['input']>;
  usernamePublic?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserPublicArgs = {
  id: Scalars['String']['input'];
  resourceCollectionId?: InputMaybe<Scalars['String']['input']>;
  userPersistedConfigId?: InputMaybe<Scalars['String']['input']>;
  usernamePublic?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  resource: Resource;
  resourceCollection: Array<Resource>;
  specificationLabel: SpecificationLabel;
  specificationLabelCollection: Array<SpecificationLabel>;
  userPublic: UserPublic;
  userPublicCollection: Array<UserPublic>;
};


export type QueryResourceArgs = {
  id: Scalars['String']['input'];
};


export type QuerySpecificationLabelArgs = {
  _id: Scalars['String']['input'];
};


export type QueryUserPublicArgs = {
  id: Scalars['String']['input'];
};

export type Resource = {
  __typename?: 'Resource';
  _id: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  createdBy: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  specificationLabels: Array<SpecificationLabel>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type SpecificationLabel = {
  __typename?: 'SpecificationLabel';
  _id: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  createdBy: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  labelValue: Array<LabelValue>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type UserPrivate = {
  __typename?: 'UserPrivate';
  _id: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  createdBy: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type UserPublic = {
  __typename?: 'UserPublic';
  _id: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  createdBy: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  updatedBy?: Maybe<Scalars['String']['output']>;
  usernamePublic: Scalars['String']['output'];
};


