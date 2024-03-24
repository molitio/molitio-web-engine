# system-schema

System Schema is a repository designated to be a single source of truth of molitio schema models. It provides the means to generate type safe data contracts to be consumed by the ui and the back and as well.

Certainly! Creating a comprehensive checklist for the entities and their relationships will provide a clear roadmap for the refactoring process. Here's a detailed checklist based on the schema information you provided:

### Entities Checklist

**1. UserPublic**
   - [ ] Define `UserPublic` type with fields: `id`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`, `usernamePublic`, `resourceCollectionId`, `userPersistedConfigId`.
   - [ ] Define queries and mutations for `UserPublic`.
   - [ ] Implement resolvers for `UserPublic`.

**2. Resource**
   - [ ] Define `Resource` type with fields: `id`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`, `name`, `description`, `labelCollection`, `resourceCollectionId`.
   - [ ] Define queries and mutations for `Resource`.
   - [ ] Implement resolvers for `Resource`.

**3. ResourceCommunity**
   - [ ] Define `ResourceCommunity` type with fields: `id`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`, `name`, `description`, `membersPublicIdCollection`.
   - [ ] Define queries and mutations for `ResourceCommunity`.
   - [ ] Implement resolvers for `ResourceCommunity`.

**4. UserPrivate**
   - [ ] Define `UserPrivate` type with fields: `id`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`, `idPublicKey`, `userIdentityId`, `userPublicId`, `privateResourceCollectionId`.
   - [ ] Define queries and mutations for `UserPrivate`.
   - [ ] Implement resolvers for `UserPrivate`.

**5. UserIdentity**
   - [ ] Define `UserIdentity` type with fields: `id`, `createdAt`, `updatedAt`, `createdBy`, `updatedBy`, `idPublicKey`, `name`, `address`, `email`, `gAccountId`.
   - [ ] Define queries and mutations for `UserIdentity`.
   - [ ] Implement resolvers for `UserIdentity`.

### Relationships Checklist

**1. UserPublic**
   - [ ] `UserPublic` to `ResourceCollection`: One-to-Many.
   - [ ] `UserPublic` to `UserPersistedConfig`: One-to-One.

**2. Resource**
   - [ ] `Resource` to `ResourceCollection`: Many-to-One.

**3. ResourceCommunity**
   - [ ] `ResourceCommunity` to `UserPublic`: Many-to-Many (via `membersPublicIdCollection`).
   - [ ] `ResourceCommunity` to `Resource`: One-to-Many.

**4. UserPrivate**
   - [ ] `UserPrivate` to `UserIdentity`: One-to-One.
   - [ ] `UserPrivate` to `UserPublic`: One-to-One.
   - [ ] `UserPrivate` to `PrivateResourceCollection`: One-to-One.

**5. UserIdentity**
   - [ ] `UserIdentity` to `UserPrivate`: One-to-One.

### Additional Steps

- [ ] Implement any additional scalar types or enums as necessary.
- [ ] Ensure all ID fields are correctly defined and referenced.
- [ ] Validate all createdAt, updatedAt, createdBy, and updatedBy fields.
- [ ] Test each entity's queries and mutations independently.
- [ ] Test the relationships between entities.
- [ ] Perform integration testing for the entire schema.
- [ ] Optimize the schema and resolvers for performance.

This checklist should guide you through the process of setting up your GraphQL schema with a clear understanding of what needs to be done for each entity and their interconnections. Once you're ready, we can start working through the checklist, beginning with the first entity: `UserPublic`.