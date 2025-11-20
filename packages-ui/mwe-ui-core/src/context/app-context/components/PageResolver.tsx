import { useAppContext } from '../hooks';
import { findNodeById } from '../helpers';
import { DEFAULT_LOCALE, SupportedLocale } from '../../../ui-app/constants';

interface PageResolverProps {
    nodeId: string;
    locale?: SupportedLocale;
}

export function PageResolver({ nodeId, locale }: PageResolverProps) {
    const { ctx, componentRegistry } = useAppContext();
    const node = findNodeById(nodeId, ctx);

    if (!node) {
        return <div>Page not found</div>;
    }

    if (node.type !== 'page') {
        return <div>Not a page</div>;
    }

    const localeToRender = locale || DEFAULT_LOCALE;
    const localizedContent = node.content?.[localeToRender] ?? node.content?.[DEFAULT_LOCALE];

    if (!localizedContent) {
        return <div>No content found for locale: {localeToRender}</div>;
    }

    const contentType = localizedContent._type;

    if (!contentType) {
        return <div>No content type</div>;
    }

    const Component = componentRegistry[contentType];

    if (!Component) {
        return <div>Component not found for type: {contentType}</div>;
    }

    return <Component data={localizedContent} />;
}
