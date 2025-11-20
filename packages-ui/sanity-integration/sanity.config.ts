import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { documentInternationalization } from '@sanity/document-internationalization';
import { deskStructure } from './deskStructure';

export default defineConfig({
    name: 'mhs-dev',
    title: 'Molitio Hosted Sites',

    projectId: 'wzyge8ne',
    dataset: 'development',

    plugins: [
        structureTool({
            structure: deskStructure,
        }),
        visionTool(),
        documentInternationalization({
            // Required configuration
            supportedLanguages: [
                { id: 'hu', title: 'Hungarian' },
                { id: 'en', title: 'English' },
            ],
            schemaTypes: [...schemaTypes.map((type) => type.name)],
        }),
    ],
    schema: {
        types: schemaTypes,
    },
    document: {
        newDocumentOptions: (prev, { creationContext }) => {
            if (creationContext.type === 'global') {
                return prev.filter((templateItem) => templateItem.templateId !== 'appContext');
            }
            return prev;
        },
        actions: (prev, { schemaType }) => {
            if (schemaType === 'appContext') {
                return prev.filter(({ action }) => !['unpublish', 'delete', 'duplicate'].includes(action || ''));
            }
            return prev;
        },
    },
});
