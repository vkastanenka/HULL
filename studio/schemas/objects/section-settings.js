import React from 'react'
import { Avatar } from '@sanity/ui'

import {
  breakpoint,
  paddingTop,
  paddingBottom,
  textColor,
  backgroundColor,
} from '../../lib/fields'

export default {
  title: 'Section Settings',
  name: 'sectionSettings',
  type: 'object',
  fieldsets: [
    {
      title: '',
      name: 'settings',
      options: { columns: 2 },
    },
  ],
  fields: [
    breakpoint(),
    textColor({ fieldset: 'settings' }),
    backgroundColor({ fieldset: 'settings' }),
    paddingTop({
      options: {
        list: [
          { title: 'XS (16px)', value: 'pt-16' },
          { title: 'SM (32px)', value: 'pt-32' },
          { title: 'MD (48px)', value: 'pt-48' },
          { title: 'LG (64px)', value: 'pt-64' },
          { title: 'XL (96px)', value: 'pt-96' },
          { title: '2XL (128px)', value: 'pt-128' },
        ],
      },
      fieldset: 'settings',
    }),
    paddingBottom({
      options: {
        list: [
          { title: 'XS (16px)', value: 'pb-16' },
          { title: 'SM (32px)', value: 'pb-32' },
          { title: 'MD (48px)', value: 'pb-48' },
          { title: 'LG (64px)', value: 'pb-64' },
          { title: 'XL (96px)', value: 'pb-96' },
          { title: '2XL (128px)', value: 'pb-128' },
        ],
      },
      fieldset: 'settings',
    }),
  ],
  preview: {
    select: {
      breakpoint: 'breakpoint',
      paddingTop: 'paddingTop',
      paddingBottom: 'paddingBottom',
    },
    prepare({ breakpoint, paddingTop, paddingBottom }) {
      return {
        title:
          paddingTop && paddingBottom
            ? `Padding Top: ${paddingTop} + Padding Bottom: ${paddingBottom}`
            : null,
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
