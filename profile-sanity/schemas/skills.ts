import { defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      description: 'Title of skill',
      type: 'string',
    },
    {
        name: 'progress',
        title: 'Progress',
        type: 'number',
        description: 'Progress of skill from 0 to 100',
        validation:(Rule) => Rule.required().min(0).max(100)
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
      name: 'directionLeft',
      title: 'Direction Left',
      type: 'boolean',
      initialValue: false,
    }
  ]
})
