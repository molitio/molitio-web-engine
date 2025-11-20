import { defineType, defineField } from 'sanity';

export const contextNode = defineType({
    name: 'contextNode',
    title: 'Context Node',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Page', value: 'page' },
                    { title: 'Folder', value: 'folder' },
                ],
            },
            initialValue: 'page',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'reference',
            to: [{ type: 'landingPage' }, { type: 'aboutPage' }],
            hidden: ({ parent }) => parent?.type !== 'page',
        }),
        defineField({
            name: 'children',
            title: 'Children',
            type: 'array',
            of: [{ type: 'contextNode' }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'slug.current',
        },
    },
});
