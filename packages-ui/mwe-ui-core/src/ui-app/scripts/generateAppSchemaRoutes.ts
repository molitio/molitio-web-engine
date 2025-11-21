import { Project, QuoteKind, VariableDeclarationKind } from 'ts-morph';
import { ContextNode } from '../../context/app-context/types/ContextNode.ts';
import { AppContext, RootNode } from '../../context/app-context/types/AppContext.ts';
import { appSchemaRoutesConfig, AppSchemaRoutesConfig } from './appSchemaRoutes.config.ts';
import path from 'path';
import fs from 'fs';

const PROJECT_SETTINGS = {
    manipulationSettings: {
        quoteKind: QuoteKind.Single,
    },
    skipAddingFilesFromTsConfig: true,
};

type PageRoute = {
    node: ContextNode;
    segments: string[];
};

type TraversalNode = ContextNode | RootNode;

function toImportPath(fromFile: string, targetDir: string): string {
    const relative = path.relative(path.dirname(fromFile), targetDir).replace(/\\/g, '/');
    if (!relative || relative === '.') {
        return './';
    }
    return relative.startsWith('.') ? relative : `./${relative}`;
}

function normalizeRootNode(rootNode: AppContext['rootNode']): RootNode {
    return {
        id: rootNode.id,
        type: 'root',
        title: rootNode.title,
        content: rootNode.content,
        children: rootNode.children,
    };
}

function collectPageRoutes(node: TraversalNode, root: RootNode, parentSegments: string[], routes: PageRoute[]) {
    const segments = [...parentSegments];
    const slug = 'slug' in node ? node.slug?.trim() : undefined;
    if (slug && slug !== '/') {
        segments.push(slug);
    }

    if (node.type === 'page') {
        routes.push({ node, segments });
    }

    node.children?.forEach((child) => collectPageRoutes(child, root, segments, routes));
}

function createRootRouteFile(project: Project, routesDir: string, constantsDir: string) {
    const filePath = path.join(routesDir, '__root.tsx');
    const sourceFile = project.createSourceFile(filePath, '', { overwrite: true });
    const constantsImportPath = toImportPath(filePath, constantsDir);

    sourceFile.addImportDeclaration({
        moduleSpecifier: '@tanstack/react-router',
        namedImports: ['Outlet', 'createRootRouteWithContext'],
    });

    sourceFile.addImportDeclaration({
        moduleSpecifier: '@sanity/client',
        namedImports: ['SanityClient'],
    });

    sourceFile.addImportDeclaration({
        moduleSpecifier: constantsImportPath,
        namedImports: ['SupportedLocale'],
    });

    sourceFile.addTypeAlias({
        name: 'MWEClientAppRouterContext',
        type: `{
    client: SanityClient;
    locale: SupportedLocale;
}`,
    });

    sourceFile.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        isExported: true,
        declarations: [
            {
                name: 'Route',
                initializer: `createRootRouteWithContext<MWEClientAppRouterContext>()({
    component: RootComponent,
    notFoundComponent: () => <div>Not Found</div>,
})`,
            },
        ],
    });

    sourceFile.addFunction({
        name: 'RootComponent',
        isExported: true,
        returnType: 'JSX.Element',
        statements: `
    return (
        <main className="h-screen box-border mx-auto m-0 p-0 leading-6 text-primary text-base bg-gradient-to-172 overflow-x-auto overflow-y-auto list-none">
            <Outlet />
        </main>
    );
`,
    });
}

function createIndexRedirectFile(project: Project, routesDir: string) {
    const filePath = path.join(routesDir, 'index.tsx');
    const sourceFile = project.createSourceFile(filePath, '', { overwrite: true });
    const i18nDir = path.resolve(__dirname, '..', '..', 'i18n');
    const i18nImportPath = toImportPath(filePath, i18nDir);

    sourceFile.addImportDeclaration({
        moduleSpecifier: '@tanstack/react-router',
        namedImports: ['createFileRoute', 'redirect'],
    });

    sourceFile.addImportDeclaration({
        moduleSpecifier: i18nImportPath,
        defaultImport: 'i18n',
    });

    sourceFile.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        isExported: true,
        declarations: [
            {
                name: 'Route',
                initializer: `createFileRoute('/')({
    beforeLoad: () => {
        throw redirect({ to: '/$locale', params: { locale: i18n.language }, replace: true });
    },
})`,
            },
        ],
    });
}

function createLocaleWrapperFile(project: Project, routesDir: string, componentsDir: string, constantsDir: string) {
    const filePath = path.join(routesDir, '$locale.tsx');
    const sourceFile = project.createSourceFile(filePath, '', { overwrite: true });
    const componentsImportPath = toImportPath(filePath, componentsDir);
    const constantsImportPath = toImportPath(filePath, constantsDir);

    sourceFile.addImportDeclaration({
        moduleSpecifier: '@tanstack/react-router',
        namedImports: ['createFileRoute', 'redirect'],
    });

    sourceFile.addImportDeclaration({
        moduleSpecifier: componentsImportPath,
        namedImports: ['LocaleLayout'],
    });

    sourceFile.addImportDeclaration({
        moduleSpecifier: constantsImportPath,
        namedImports: ['DEFAULT_LOCALE', 'isSupportedLocale', 'supportedLocaleOrDefault'],
    });

    sourceFile.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        isExported: true,
        declarations: [
            {
                name: 'Route',
                initializer: `createFileRoute('/$locale')({
    beforeLoad: ({ params }) => {
        const { locale } = params;
        console.log('Requested locale:', locale);

        if (!isSupportedLocale(locale)) {
            throw redirect({ to: '/$locale', params: { locale: DEFAULT_LOCALE }, replace: true });
        }
    },
    component: RouteComponent,
})`,
            },
        ],
    });

    sourceFile.addFunction({
        name: 'RouteComponent',
        statements: `
    const { locale } = Route.useParams();
    const selectedLocale = supportedLocaleOrDefault(locale);

    return <LocaleLayout locale={selectedLocale} />;
`,
    });
}

function createLocalizedPageRouteFile(
    project: Project,
    filePath: string,
    routePath: string,
    nodeId: string,
    constantsDir: string,
    resolverDir: string,
) {
    const sourceFile = project.createSourceFile(filePath, '', { overwrite: true });
    const constantsImportPath = toImportPath(filePath, constantsDir);
    const resolverImportPath = toImportPath(filePath, resolverDir);

    sourceFile.addImportDeclaration({
        moduleSpecifier: '@tanstack/react-router',
        namedImports: ['createFileRoute'],
    });

    sourceFile.addImportDeclaration({
        moduleSpecifier: resolverImportPath,
        namedImports: ['PageResolver'],
    });

    sourceFile.addImportDeclaration({
        moduleSpecifier: constantsImportPath,
        namedImports: ['supportedLocaleOrDefault'],
    });

    sourceFile.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        isExported: true,
        declarations: [
            {
                name: 'Route',
                initializer: `createFileRoute('${routePath}')({
    component: RouteComponent,
})`,
            },
        ],
    });

    sourceFile.addFunction({
        name: 'RouteComponent',
        returnType: 'JSX.Element',
        statements: `
    const { locale } = Route.useParams();
    const selectedLocale = supportedLocaleOrDefault(locale ?? '');
    return <PageResolver nodeId="${nodeId}" locale={selectedLocale} />;
`,
    });
}

async function generateRoutesForSchema(config: AppSchemaRoutesConfig) {
    if (!config.appContext.rootNode) {
        throw new Error(`AppContext for ${config.appSchemaType} is missing a root node.`);
    }

    const routesDir = path.resolve(__dirname, '..', config.appSchemaType, 'routes');
    const constantsDir = path.resolve(__dirname, '..', 'constants');
    const componentsDir = path.resolve(__dirname, '..', 'components');
    const resolverDir = path.resolve(__dirname, '..', 'context', 'app-context', 'components');
    const localeRoutesDir = path.join(routesDir, '$locale');

    console.info('Generating routes for', config.appSchemaType, 'at', routesDir);
    fs.rmSync(routesDir, { recursive: true, force: true });
    fs.mkdirSync(localeRoutesDir, { recursive: true });

    const project = new Project(PROJECT_SETTINGS);

    createRootRouteFile(project, routesDir, constantsDir);
    createIndexRedirectFile(project, routesDir);
    createLocaleWrapperFile(project, routesDir, componentsDir, constantsDir);

    const normalizedRoot = normalizeRootNode(config.appContext.rootNode);
    const pageRoutes: PageRoute[] = [];
    collectPageRoutes(normalizedRoot, normalizedRoot, [], pageRoutes);

    for (const { node, segments } of pageRoutes) {
        const fileName = segments.length === 0 ? 'index.tsx' : `${segments.at(-1)}.tsx`;
        const parent = segments.slice(0, -1);
        const directory = path.join(localeRoutesDir, ...parent);
        fs.mkdirSync(directory, { recursive: true });

        const filePath = path.join(directory, fileName);
        const routeSuffix = segments.join('/');
        const routePath = routeSuffix === '' ? '/$locale/' : `/$locale/${routeSuffix}`;

        createLocalizedPageRouteFile(project, filePath, routePath, node.id, constantsDir, resolverDir);
        console.log('Generated localized route file:', path.relative(routesDir, filePath));
    }

    await project.save();
}

async function main() {
    for (const config of appSchemaRoutesConfig) {
        await generateRoutesForSchema(config);
    }
}

main().catch((error) => {
    console.error('Failed to generate app schema routes:', error);
    process.exit(1);
});
