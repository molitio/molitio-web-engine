import { defineType, defineField } from 'sanity';

export const rootNode = defineType({
    name: 'rootNode',
    title: 'Root Node',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'homePage',
            title: 'Home Page Content',
            description: 'Content for the root path (/)',
            type: 'reference',
            to: [{ type: 'landingPage' }, { type: 'aboutPage' }],
        }),
        defineField({
            name: 'children',
            title: 'Children',
            type: 'array',
            of: [{ type: 'contextNode' }],
        }),
    ],
});
