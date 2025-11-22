import { AppContext, RootNode } from './types/AppContext';
import { ContextNode } from './types/ContextNode';

export function findRootNode(context: AppContext): RootNode | undefined {
    if (!context.rootNode) return undefined;
    else {
        return { ...context.rootNode };
    }
}

export function findNodeById(id: string, context: AppContext): ContextNode | undefined {
    if (!context.rootNode) return undefined;

    const rootAsContextNode: RootNode = {
        id: context.rootNode.id,
        type: 'root',
        title: context.rootNode.title,
        content: context.rootNode.content,
        children: context.rootNode.children,
    };

    const traverse = (node: ContextNode): ContextNode | undefined => {
        if (node.id === id) {
            return node;
        }
        if (!node.children) {
            return undefined;
        }
        for (const child of node.children) {
            const found = traverse(child);
            if (found) return found;
        }
        return undefined;
    };

    const children = rootAsContextNode.children ?? [];
    for (const child of children) {
        const found = traverse(child);
        if (found) {
            return { ...found };
        }
    }

    return undefined;
}

export function findNodeByPath(path: string, context: AppContext): ContextNode | undefined {
    if (!context.rootNode) return undefined;
    // Normalize path: remove leading/trailing slashes
    const segments = path.split('/').filter(Boolean);

    if (segments.length === 0) {
        return undefined;
    }

    let currentNode: ContextNode | undefined = undefined;
    let children = context.rootNode.children ?? [];

    for (const segment of segments) {
        const found = children.find((child) => child.slug === segment);
        if (!found) {
            return undefined;
        }
        currentNode = found;
        children = found.children ?? [];
    }

    return { ...currentNode! };
}
