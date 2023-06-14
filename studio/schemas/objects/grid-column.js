import React from 'react'
import { TextAlignLeft } from 'phosphor-react'
import { Avatar } from '@sanity/ui'

import { getTypeTitles } from '../../lib/helpers'

export default {
  title: 'Column',
  name: 'gridColumn',
  type: 'object',
  icon: TextAlignLeft,
  fields: [
    {
      title: 'Column Sizes',
      name: 'sizes',
      type: 'array',
      of: [{ type: 'gridSize' }],
      description:
        'Define the display size of this column for different screen widths',
      validation: (Rule) => Rule.required().min(1),
      initialValue: [
        {
          _type: 'gridSize',
          breakpoint: ' ',
          colWidth: 'col-span-12',
        },
      ],
    },
    {
      title: 'Content Blocks',
      name: 'blocks',
      type: 'array',
      description: 'The content that exists inside this column',
      of: [{ type: 'freeform' }, { type: 'photo' }],
    },
  ],
  preview: {
    select: {
      sizes: 'sizes.0',
      blocks: 'blocks',
    },
    prepare({ sizes, blocks }) {
      const { colWidth } = sizes
      const types = blocks.map((block) => block._type)

      const title = getTypeTitles(types)
      const subtitle = ''

      const colWidthSplit = colWidth.split('-')
      const colWidthNumber = colWidthSplit[colWidthSplit.length - 1]

      return {
        title: title || 'Block',
        subtitle: subtitle || '',
        media: <Avatar initials={colWidthNumber} size={1} />,
      }
    },
  },
}
