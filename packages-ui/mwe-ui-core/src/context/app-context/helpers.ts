import { AppContext } from './types/AppContext';
import { ContextNode } from './types/ContextNode';

export function findNodeById(id: string, context: AppContext): ContextNode | null {
    if (!context.rootNode) return null;

    const rootAsContextNode: ContextNode = {
        id: context.rootNode.id,
        slug: '',
        title: context.rootNode.title,
        type: 'page',
        content: context.rootNode.content,
        children: context.rootNode.children,
    };

    if (rootAsContextNode.id === id) {
        return rootAsContextNode;
    }

    const traverse = (node: ContextNode): ContextNode | null => {
        if (node.id === id) {
            return node;
        }
        if (!node.children) {
            return null;
        }
        for (const child of node.children) {
            const found = traverse(child);
            if (found) return found;
        }
        return null;
    };

    const children = rootAsContextNode.children ?? [];
    for (const child of children) {
        const found = traverse(child);
        if (found) {
            return found;
        }
    }

    return null;
}

export function findNodeByPath(path: string, context: AppContext): ContextNode | null {
    if (!context.rootNode) return null;

    // Normalize path: remove leading/trailing slashes
    const segments = path.split('/').filter(Boolean);

    if (segments.length === 0) {
        return null;
    }

    let currentNode: ContextNode | null = null;
    let children = context.rootNode.children ?? [];

    for (const segment of segments) {
        const found = children.find((child) => child.slug === segment);
        if (!found) {
            return null;
        }
        currentNode = found;
        children = found.children ?? [];
    }

    return currentNode;
}
