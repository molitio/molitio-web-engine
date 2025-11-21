import { useAppContext } from '../../context/app-context/hooks';
import { findNodeById } from '../../context/app-context/helpers';
import { DEFAULT_LOCALE, SupportedLocale } from '../constants';
import { ComponentRegistry } from '../../context';

interface PageResolverProps {
    nodeId: string;
    locale?: SupportedLocale;
    componentRegistry: ComponentRegistry;
}

export function PageResolver({ nodeId, locale, componentRegistry }: PageResolverProps) {
    const { ctx } = useAppContext();
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
