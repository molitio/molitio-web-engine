import { findNodeById } from '../../context';
import { useAppContext } from '../../context/app-context/hooks';
import { SupportedLocale } from '../../ui-app';

type AboutPageProps = {
    locale: SupportedLocale;
};

export default function AboutPage({ locale }: AboutPageProps) {
    const { ctx } = useAppContext();

    const node = findNodeById('aboutPage', ctx);

    if (!node) {
        return <div>Page not found</div>;
    }

    return (
        <div>
            <h1>{node.title}</h1>
            <p>{node.content?.[locale]?.['introText']} </p>
        </div>
    );
}
