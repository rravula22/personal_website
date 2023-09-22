import { defineType } from 'sanity';
export default defineType({
    name: 'certifications',
    title: 'Certifications',
    type: 'document',
    fields: [
        {
        name: 'title',
        title: 'title',
        description: 'title of certification',
        type: 'string',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                  hotspot: true,
            }
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text'
        }
    ]
})
