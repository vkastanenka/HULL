import React from 'react'
import { Question } from 'phosphor-react'
import { Avatar } from '@sanity/ui'

import {
  alignItems,
  breakpoint,
  justifyContent,
  order,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  width,
} from '../../lib/fields'

export default {
  title: 'Column Size',
  name: 'gridSize',
  type: 'object',
  groups: [
    { title: 'Settings', name: 'settings', default: true },
    { title: 'Advanced Settings', name: 'advancedSettings' },
  ],
  fieldsets: [
    {
      title: '',
      name: 'sizes',
      options: { columns: 2 },
    },
  ],
  fields: [
    {
      name: 'gridSizeNote',
      type: 'note',
      options: {
        icon: Question,
        headline: 'How to setup column sizes',
        message: (
          <>
            Always start with a "Default" breakpoint and work your way up.
            Visually, think about how many grid "spaces" you want your column to
            occupy at each breakpoint.
          </>
        ),
      },
    },
    breakpoint({
      group: 'settings',
      fieldset: 'sizes',
      description: 'Control what screen width this is for',
    }),
    {
      title: 'Column Width',
      name: 'colWidth',
      type: 'string',
      group: 'settings',
      description: 'Set how many grid spaces this occupies',
      options: {
        list: [
          { title: '1', value: 'col-span-1' },
          { title: '2', value: 'col-span-2' },
          { title: '3', value: 'col-span-3' },
          { title: '4', value: 'col-span-4' },
          { title: '5', value: 'col-span-5' },
          { title: '6', value: 'col-span-6' },
          { title: '7', value: 'col-span-7' },
          { title: '8', value: 'col-span-8' },
          { title: '9', value: 'col-span-9' },
          { title: '10', value: 'col-span-10' },
          { title: '11', value: 'col-span-11' },
          { title: '12', value: 'col-span-12' },
        ],
      },
      validation: (Rule) => Rule.required(),
      fieldset: 'sizes',
    },
    {
      title: 'Start (offset)',
      name: 'start',
      type: 'string',
      description: 'Set the grid space this starts in',
      options: {
        list: [
          { title: '1', value: 'col-start-1' },
          { title: '2', value: 'col-start-2' },
          { title: '3', value: 'col-start-3' },
          { title: '4', value: 'col-start-4' },
          { title: '5', value: 'col-start-5' },
          { title: '6', value: 'col-start-6' },
          { title: '7', value: 'col-start-7' },
          { title: '8', value: 'col-start-8' },
          { title: '9', value: 'col-start-9' },
          { title: '10', value: 'col-start-10' },
          { title: '11', value: 'col-start-11' },
          { title: '12', value: 'col-start-12' },
        ],
      },
      fieldset: 'sizes',
      group: 'settings',
    },
    width({
      title: 'Content Width',
      name: 'contentWidth',
      group: 'settings',
      fieldset: 'sizes',
      description: `Apply a width to this column's content. (Required to position photos.)`,
    }),
    justifyContent({
      group: 'settings',
      description: `Control the content X-axis positioning.`,
      fieldset: 'sizes',
    }),
    alignItems({
      group: 'settings',
      description: `Control the content Y-axis positioning.`,
      fieldset: 'sizes',
    }),
    order({
      group: 'settings',
      description: 'Set the order priority of the column.',
      fieldset: 'sizes',
    }),
    paddingTop({ fieldset: 'sizes', group: 'advancedSettings' }),
    paddingBottom({ fieldset: 'sizes', group: 'advancedSettings' }),
    paddingLeft({ fieldset: 'sizes', group: 'advancedSettings' }),
    paddingRight({ fieldset: 'sizes', group: 'advancedSettings' }),
  ],
  preview: {
    select: {
      breakpoint: 'breakpoint',
      colWidth: 'colWidth',
      start: 'start',
    },
    prepare({ breakpoint, colWidth, start }) {
      const colWidthSplit = colWidth.split('-')
      const colWidthNumber = colWidthSplit[colWidthSplit.length - 1]

      return {
        title: `Width: ${colWidthNumber}`,
        subtitle: start ? `Offset: ${start}` : null,
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
