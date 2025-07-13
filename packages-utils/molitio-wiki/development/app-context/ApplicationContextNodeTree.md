
# ApplicationContextNodeTree Specification

## ContextNode Concept

**`ContextNode`** is the core type representing a node in the application context tree. It aggregates navigation, content, and resource data, and can have child nodes, forming a hierarchical structure. This enables a single source of truth for the application's data context.


### Context Node Structure (Current Implementation)
```ts
// src/context/app-context/types/ContextNode.ts
import { NavigationSegment } from './NavRoot';

export type ContextNodeType = 'element' | 'nav' | 'text' | 'media' | 'root' | string;

export type ContextNode = {
    resourceId: string;
    type: ContextNodeType;
    navigation?: NavigationSegment;
    nodeTree?: Record<string, ContextNode>; // children nodes keyed by route/resourceId
};

// src/context/app-context/types/NavRoot.ts
export type NavigationSegment = PathSegment & {
    label: string;
    describtionText?: string;
};

export type PathSegment = {
    path: string;
    roleClaims?: string[];
};

// src/context/app-context/types/AppContext.ts
import { ContextNode } from './ContextNode';
export type AppContext = {
    appName: string;
    appId: string;
    appVersion?: string;
    appLogoUrl?: string;
    appLogoAlt?: string;
    nodeTree?: Record<string, ContextNode>;
};

// src/context/DefaultApplicationContextRoot.ts (example)
export const DefaultApplicationContextRoot: AppContext = {
    appName: 'Default App',
    appId: 'default-app-id',
    nodeTree: {
        root: {
            resourceId: 'root',
            type: 'nav',
            navigation: {
                path: '/',
                label: 'Home',
            },
            nodeTree: {
                about: {
                    resourceId: 'about',
                    type: 'nav',
                    navigation: {
                        path: '/about',
                        label: 'About',
                    },
                },
            },
        },
    },
};
```


## Key Principles (Current)
- All context-related data is accessed via the `nodeTree` property on `AppContext`, which is a record of root nodes (typically keyed by 'root').
- Each `ContextNode` can represent a route or resource, and may have a `navigation` segment for navigation data.
- Child nodes are stored in the `nodeTree` property of each `ContextNode`, keyed by their resourceId or route.
- The structure is recursive, supporting deep nesting and flexible application modeling.
- Segments (like navigation, text, media) are added to nodes as needed, but only navigation is implemented in the current prototype.

---


## Navigation Segment
- **Purpose**: Context node tree branches and node are also represent navigation paths in the application, if the given node has a `navigation` property, it indicates that this node is part of the application's navigation structure.  
