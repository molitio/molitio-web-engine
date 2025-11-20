import { defineType, defineField } from 'sanity';

export const appContext = defineType({
    name: 'appContext',
    title: 'App Context',
    type: 'document',
    fields: [
        defineField({
            name: 'appId',
            title: 'App ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'rootNode',
            title: 'Root Node',
            type: 'contextNode',
        }),
    ],
});
