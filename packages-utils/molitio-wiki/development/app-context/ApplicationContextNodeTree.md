
# ApplicationContextNodeTree Specification

## ContextNode Concept

**`ContextNode`** is the core type representing a node in the application context tree. It aggregates navigation, content, and resource data, and can have child nodes, forming a hierarchical structure. This enables a single source of truth for the application's data context.

### Context Node Structure
```ts
export type ContextNode = {
  resourceId: string;
  type: ContextNodeType;
  navigation?: NavigationSegment;
  textContent?: TextContentSegment;
  mediaResource?: MediaResourceSegment;
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
- An xSegment is a section within a ContextNode that uses strongly typed keys to organize data in a hierarchical key-value structure. This approach ensures type safety and provides a flexible way to store and access web application data within the context tree.
- content in a context node refers to text 

---


## Navigation Segment
- **Purpose**: Context node tree branches and node are also represent navigation paths in the application, if the given node has a `navigation` property, it indicates that this node is part of the application's navigation structure.  
