import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
            hotspot: true,
      }
    },
    {
      name: 'Company',
      title: 'Company',
      type: 'text'
    },
    {
      name: 'startDate',
      title: 'DateStarted',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'DateEnded',
      type: 'date',
    },
    {
        name: 'isCurrentJob',
        title: 'IsCurrentlyWorkingHere',
        type: 'boolean',
    },
    {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
        name: 'points',
        title: 'Points',
        type: 'array',
        of: [{type: 'string'}],
    }
  ]
})
