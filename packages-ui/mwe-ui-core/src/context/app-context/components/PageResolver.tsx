import { useAppContext } from '../hooks';
import { findNodeById } from '../helpers';

interface PageResolverProps {
    nodeId: string;
}

export function PageResolver({ nodeId }: PageResolverProps) {
    const { ctx, componentRegistry } = useAppContext();
    const node = findNodeById(nodeId, ctx);

    if (!node) {
        return <div>Page not found</div>;
    }

    if (node.type !== 'page') {
        return <div>Not a page</div>;
    }

    const contentType = node.content?._type;

    if (!contentType) {
        return <div>No content type</div>;
    }

    const Component = componentRegistry[contentType];

    if (!Component) {
        return <div>Component not found for type: {contentType}</div>;
    }

    return <Component data={node.content} />;
}
