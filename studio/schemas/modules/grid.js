import { TextAlignLeft, Question } from 'phosphor-react'

import { getTypeTitles } from '../../lib/helpers'

export default {
  title: 'Content Grid',
  name: 'grid',
  type: 'object',
  icon: TextAlignLeft,
  groups: [
    { title: 'Content', name: 'content', default: true },
    { title: 'Settings', name: 'settings' },
  ],
  fields: [
    {
      name: 'gridNote',
      type: 'note',
      options: {
        icon: Question,
        headline: 'How to setup a Grid',
        message: `Grids are first defined by the number of "spaces" they should have. Visually, you can think of this like available cells in a spreadsheet or table. Then, we define the columns that should exist within this grid, and what "space(s)" they should occupy at different screen sizes.`,
      },
    },
    {
      title: 'Grid Size',
      name: 'size',
      type: 'string',
      description:
        'Set the default number of column spaces available for this grid.',
      initialValue: 'grid-cols-12',
      group: 'content',
      options: {
        list: [
          { title: '1', value: 'grid-cols-1' },
          { title: '2', value: 'grid-cols-2' },
          { title: '3', value: 'grid-cols-3' },
          { title: '4', value: 'grid-cols-4' },
          { title: '5', value: 'grid-cols-5' },
          { title: '6', value: 'grid-cols-6' },
          { title: '7', value: 'grid-cols-7' },
          { title: '8', value: 'grid-cols-8' },
          { title: '9', value: 'grid-cols-9' },
          { title: '10', value: 'grid-cols-10' },
          { title: '11', value: 'grid-cols-11' },
          { title: '12', value: 'grid-cols-12' },
        ],
      },
    },
    {
      title: 'Columns',
      name: 'columns',
      group: 'content',
      type: 'array',
      of: [{ type: 'gridColumn' }],
      description: 'The columns that are part of this grid.',
      validation: (Rule) => Rule.required(),
      initialValue: [
        {
          _type: 'gridColumn',
        },
      ],
    },
    {
      title: 'Settings',
      name: 'settings',
      type: 'array',
      of: [{ type: 'sectionSettings' }],
      group: 'settings',
      initialValue: [
        {
          _type: 'sectionSettings',
          breakpoint: ' ',
          paddingTop: 'pt-64',
          paddingBottom: 'pb-64',
        },
        {
          _type: 'sectionSettings',
          breakpoint: 'md',
          paddingTop: 'pt-128',
          paddingBottom: 'pb-128',
        },
      ],
    },
  ],
  preview: {
    select: {
      columns: 'columns',
    },
    prepare({ columns }) {
      const name = getTypeTitles(columns.map((col) => col.blocks[0]._type))

      const image = (columns[0].blocks[0].content || []).find(
        (block) => block._type === 'photo'
      )

      return {
        title: `${columns.length} Column${columns.length > 1 ? 's' : ''}`,
        subtitle: name,
        media: image,
      }
    },
  },
}
