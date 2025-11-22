import { StructureBuilder } from 'sanity/structure';

export const deskStructure = (S: StructureBuilder) =>
    S.list()
        .title('Content')
        .items([
            // Singleton for App Context
            S.listItem()
                .title('App Context')
                .id('appContext')
                .child(S.document().schemaType('appContext').documentId('appContext')),

            S.divider(),

            // List all other document types except 'appContext' and 'contextNode'
            // We also filter out 'media.tag' which comes from the media plugin if installed, just in case
            ...S.documentTypeListItems().filter(
                (listItem) => !['appContext', 'contextNode', 'media.tag'].includes(listItem.getId() as string),
            ),
        ]);
