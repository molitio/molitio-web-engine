import { AppContext } from './types/AppContext';
import { ContextNode } from './types/ContextNode';

export function findNodeById(id: string, context: AppContext): ContextNode | null {
    if (!context.rootNode) return null;

    const traverse = (node: ContextNode): ContextNode | null => {
        if (node.id === id) return node;
        if (node.children) {
            for (const child of node.children) {
                const found = traverse(child);
                if (found) return found;
            }
        }
        return null;
    };

    return traverse(context.rootNode);
}

export function findNodeByPath(path: string, context: AppContext): ContextNode | null {
    if (!context.rootNode) return null;

    // Normalize path: remove leading/trailing slashes
    const segments = path.split('/').filter(Boolean);

    let currentNode = context.rootNode;

    // If path is empty or root, return rootNode (assuming rootNode corresponds to '/')
    if (segments.length === 0) return currentNode;

    for (const segment of segments) {
        if (!currentNode.children) return null;
        const found = currentNode.children.find((child) => child.slug === segment);
        if (!found) return null;
        currentNode = found;
    }

    return currentNode;
}
