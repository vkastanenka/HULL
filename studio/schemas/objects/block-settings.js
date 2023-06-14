import { Avatar } from '@sanity/ui'

import {
  justifySelf,
  breakpoint,
  maxWidth,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
} from '../../lib/fields'

export default {
  title: 'Block Settings',
  name: 'blockSettings',
  type: 'object',
  fieldsets: [
    {
      title: '',
      name: 'settings',
      options: { columns: 2 },
    },
  ],
  fields: [
    breakpoint({ initialValue: ' ' }),
    maxWidth({ fieldset: 'settings' }),
    justifySelf({
      fieldset: 'settings',
      description: 'Control the X-axis positioning.',
      options: {
        list: [
          { title: 'Left', value: 'mr-auto' },
          { title: 'Center', value: 'mx-auto' },
          { title: 'Right', value: 'ml-auto' },
        ],
      },
    }),
    paddingTop({ fieldset: 'settings' }),
    paddingBottom({ fieldset: 'settings' }),
    paddingLeft({ fieldset: 'settings' }),
    paddingRight({ fieldset: 'settings' }),
  ],
  // TODO: Discover invalid preview config
  preview: {
    select: {
      breakpoint: 'breakpoint',
    },
    prepare({ breakpoint }) {
      return {
        title: 'Settings',
        media: (
          <Avatar
            initials={breakpoint && breakpoint.trim() ? breakpoint : 'D'}
            size={1}
          />
        ),
      }
    },
  },
}
