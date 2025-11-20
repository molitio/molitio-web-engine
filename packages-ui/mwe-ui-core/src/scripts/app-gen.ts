import { createClient } from '@sanity/client';
import * as fs from 'fs';
import * as path from 'path';
import { AppContext } from '../context/app-context/types/AppContext';
import { ContextNode } from '../context/app-context/types/ContextNode';

const SANITY_CONFIG = {
    projectId: 'wzyge8ne',
    dataset: 'development',
    useCdn: false,
    apiVersion: '2025-11-15',
};

const client = createClient(SANITY_CONFIG);

async function fetchAppContext(): Promise<AppContext> {
    const query = `*[_type == "appContext"][0]`;
    const queryResult: AppContext = await client.fetch(query);
    console.info('Fetched AppContext:', queryResult);
    return queryResult;
}

function generateRoutes(node: ContextNode, parentPath: string, outputDir: string) {
    let segment = node.slug;

    // Handle root/index mapping
    // Assuming root node has slug 'home' or '/' to represent the index page
    if (parentPath === '' && (segment === 'home' || segment === '/')) {
        segment = '';
    }

    const currentPath = path.join(parentPath, segment);

    if (node.type === 'page') {
        let fileName = segment === '' ? 'index.tsx' : `${segment}.tsx`;

        // If parentPath is not empty, we need to make sure the directory exists.
        // e.g. parentPath='services', segment='design' -> services/design.tsx
        // If segment is empty (index), it goes to parentPath/index.tsx

        const filePath = path.join(outputDir, parentPath, fileName);
        const dir = path.dirname(filePath);

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const routePath = currentPath === '' ? '/' : `/${currentPath}`;

        const fileContent = `import { createFileRoute } from '@tanstack/react-router';
import { PageResolver } from '@molitio/mwe-ui-core';

export const Route = createFileRoute('${routePath}')({
  component: () => <PageResolver nodeId="${node.id}" />,
});
`;
        fs.writeFileSync(filePath, fileContent);
        console.log(`Generated ${filePath}`);
    }

    if (node.children) {
        node.children.forEach((child) => generateRoutes(child, currentPath, outputDir));
    }
}

async function main() {
    const outputDir = process.argv[2];
    if (!outputDir) {
        console.error('Please provide output directory');
        process.exit(1);
    }

    console.log('Fetching AppContext...');
    try {
        const appContext = await fetchAppContext();

        if (!appContext || !appContext.rootNode) {
            console.error('No AppContext found');
            process.exit(1);
        }

        console.log('Generating routes in', outputDir);
        generateRoutes(appContext.rootNode, '', outputDir);
        console.log('Done.');
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

main();
