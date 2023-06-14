import { TextAlignLeft } from 'phosphor-react'

import { getPtPreview } from '../../lib/helpers'

export default {
  title: 'Freeform',
  name: 'freeform',
  type: 'object',
  icon: TextAlignLeft,
  groups: [
    { title: 'Content', name: 'freeformContent', default: true },
    { title: 'Settings', name: 'settings' },
  ],
  fields: [
    {
      title: 'Content',
      description: 'Set your freeform content.',
      name: 'content',
      type: 'complexPortableText',
      group: 'freeformContent',
    },
    {
      title: 'Settings',
      name: 'settings',
      type: 'array',
      of: [{ type: 'blockSettings' }],
      group: 'settings',
    },
  ],
  preview: {
    select: {
      content: 'content.0',
    },
    prepare({ content }) {
      return {
        title: 'Freeform',
        subtitle: getPtPreview(content),
      }
    },
  },
}
