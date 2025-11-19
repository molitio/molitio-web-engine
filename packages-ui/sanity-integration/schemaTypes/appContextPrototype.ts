import { defineType, defineField } from 'sanity';

export const appContextPrototype = defineType({
    name: 'appContextPrototype',
    title: 'App Context Prototype',
    type: 'document',
    fields: [
        defineField({
            name: 'appId',
            title: 'App ID',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ],
});
