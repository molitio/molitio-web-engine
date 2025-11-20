import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { AppContext } from '../../context/app-context/types/AppContext';
import { ContextNode } from '../../context/app-context/types/ContextNode';

const SANITY_CONFIG = {
    projectId: 'wzyge8ne',
    dataset: 'development',
    useCdn: false,
    apiVersion: '2025-11-15',
};

const client = createClient(SANITY_CONFIG);

type PageRoute = {
    node: ContextNode;
    segments: string[];
};

async function fetchAppContext(): Promise<AppContext> {
    const query = '*[_type == "appContext"][0]';
    const result = await client.fetch<AppContext>(query);
    if (!result) {
        throw new Error('AppContext not found');
    }
    return result;
}

function normalizeRootNode(rootNode: AppContext['rootNode']): ContextNode {
    return {
        id: rootNode.id,
        slug: '',
        title: rootNode.title,
        type: 'page',
        content: rootNode.content,
        children: rootNode.children,
    };
}

function collectPageRoutes(node: ContextNode, parentSegments: string[], routes: PageRoute[]) {
    const segments = [...parentSegments];
    const slug = node.slug?.trim();
    if (slug && slug !== '/') {
        segments.push(slug);
    }

    if (node.type === 'page') {
        routes.push({ node, segments });
    }

    node.children?.forEach((child) => collectPageRoutes(child, segments, routes));
}

function toImportPath(fromFile: string, targetDir: string): string {
    const relative = path.relative(path.dirname(fromFile), targetDir);
    const normalized = relative.replace(/\\/g, '/');
    if (!normalized || normalized === '.') {
        return './';
    }
    return normalized.startsWith('.') ? normalized : `./${normalized}`;
}

function buildRouteFileContent(
    routePath: string,
    nodeId: string,
    constantsImportPath: string,
    resolverImportPath: string,
) {
    return `import { createFileRoute } from '@tanstack/react-router';
import { PageResolver } from '${resolverImportPath}';
import { supportedLocaleOrDefault } from '${constantsImportPath}';

export const Route = createFileRoute('${routePath}')({
    component: RouteComponent,
});

function RouteComponent() {
    const { locale } = Route.useParams();
    const selectedLocale = supportedLocaleOrDefault(locale ?? '');
    return <PageResolver nodeId="${nodeId}" locale={selectedLocale} />;
}
`;
}

async function main() {
    const defaultRoutesDir = path.resolve(__dirname, '..', 'ui-app', 'routes');
    const routesDir = process.argv[2] ? path.resolve(process.argv[2]) : defaultRoutesDir;
    const localeRoutesDir = path.join(routesDir, '$locale');
    const constantsDir = path.resolve(routesDir, '..', 'constants');
    const resolverDir = path.resolve(routesDir, '..', 'context', 'app-context', 'components');

    console.info('Generating localized routes in', localeRoutesDir);

    fs.rmSync(localeRoutesDir, { recursive: true, force: true });
    fs.mkdirSync(localeRoutesDir, { recursive: true });

    const appContext = await fetchAppContext();
    if (!appContext.rootNode) {
        throw new Error('AppContext.rootNode is missing');
    }

    const rootNode = normalizeRootNode(appContext.rootNode);
    const pageRoutes: PageRoute[] = [];
    collectPageRoutes(rootNode, [], pageRoutes);

    for (const { node, segments } of pageRoutes) {
        const fileName = segments.length === 0 ? 'index.tsx' : `${segments.at(-1)}.tsx`;
        const directory = path.join(localeRoutesDir, ...segments.slice(0, -1));
        fs.mkdirSync(directory, { recursive: true });

        const filePath = path.join(directory, fileName);
        const routeSuffix = segments.join('/');
        const routePath = routeSuffix === '' ? '/$locale/' : `/$locale/${routeSuffix}`;
        const constantsImportPath = toImportPath(filePath, constantsDir);
        const resolverImportPath = toImportPath(filePath, resolverDir);
        const fileContent = buildRouteFileContent(routePath, node.id, constantsImportPath, resolverImportPath);

        fs.writeFileSync(filePath, fileContent, 'utf8');
        console.log('Generated route file:', path.relative(routesDir, filePath));
    }

    console.info('Route generation complete');
}

main().catch((error) => {
    console.error('Failed to generate routes:', error);
    process.exit(1);
});
