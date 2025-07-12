
# ApplicationContextNodeTree Specification

## ContextNode Concept

**`ContextNode`** is the core type representing a node in the application context tree. It aggregates navigation, content, and resource data, and can have child nodes, forming a hierarchical structure. This enables a single source of truth for the application's data context.

### Context Node Structure
```ts
export type ContextNode = {
  resourceId: string;
  type: ContextNodeType;
  navigation?: NavigationSegment;
  content?: ContentSegment;
  resource?: ResourceSegment;
  children?: ContextNode[];
}

export interface AppContext {
  nodeTree?: ContextNode;
  // ...other root-level properties
}
```

## Key Principles
- All context-related data is accessed via the `nodeTree` property on `AppContext`.
- Each branch of the tree is a navigational entity and can contain content and resource nodes as children.
- The structure is recursive, supporting deep nesting and flexible application modeling.

---

## Implementation Steps

1. Implement the `ContextNode` type and update `AppContext`.
2. Refactor the following files to use the new structure:
   - `AppContext.ts`
   - `NavRoot.ts`, `ContentRoot.ts`, `ResourceGalleryRoot.ts`
   - `DefaultApplicationContextRoot.ts`
3. Update all context consumers and utilities.
4. Test thoroughly to ensure data integrity and correct application behavior.
