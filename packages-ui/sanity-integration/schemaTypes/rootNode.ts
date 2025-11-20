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
            description: 'Localized content for the root path (/)',
            type: 'object',
            fields: [
                defineField({
                    name: 'en',
                    title: 'English Content',
                    type: 'reference',
                    to: [{ type: 'landingPage' }, { type: 'aboutPage' }],
                }),
                defineField({
                    name: 'hu',
                    title: 'Hungarian Content',
                    type: 'reference',
                    to: [{ type: 'landingPage' }, { type: 'aboutPage' }],
                }),
            ],
        }),
        defineField({
            name: 'children',
            title: 'Children',
            type: 'array',
            of: [{ type: 'contextNode' }],
        }),
    ],
});
