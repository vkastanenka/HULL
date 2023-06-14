import { Camera } from 'phosphor-react'

export const photo = ({ hasDisplayOptions = true, ...props } = {}) => {
  const crops = [
    { title: 'Original', value: 0 },
    { title: '1 : 1 (square)', value: 1 },
    { title: '5 : 7', value: 0.7142857143 },
    { title: '4 : 6', value: 0.6666666667 },
    { title: '16 : 9', value: 1.7777777778 },
  ]

  return {
    title: 'Photo',
    name: 'photo',
    type: 'image',
    icon: Camera,
    fields: [
      {
        title: 'Alternative text',
        name: 'alt',
        type: 'string',
        description: 'Important for SEO and accessiblity.',
      },
      {
        title: 'Settings',
        name: 'settings',
        type: 'array',
        of: [{ type: 'blockSettings' }],
      },
      ...(hasDisplayOptions
        ? [
            {
              title: 'Display Size (aspect ratio)',
              name: 'customRatio',
              type: 'number',
              options: {
                isHighlighted: true,
                list: crops,
              },
              validation: (Rule) => {
                return Rule.custom((field, context) =>
                  'asset' in context.parent && field === undefined
                    ? 'Required!'
                    : true
                )
              },
            },
          ]
        : []),
    ],
    preview: {
      select: {
        asset: 'asset',
        alt: 'asset.alt',
        customAlt: 'alt',
        customRatio: 'customRatio',
      },
      prepare({ alt, customAlt, customRatio, asset }) {
        const crop = crops.find((crop) => crop.value === customRatio)

        return {
          title: customAlt ?? alt ?? '(alt text missing)',
          subtitle: crop.title,
          media: asset,
        }
      },
    },
    ...props,
  }
}

export const breakpoint = ({ ...props } = {}) => ({
  title: 'Breakpoint',
  name: 'breakpoint',
  type: 'string',
  options: {
    list: [
      { title: 'Default', value: ' ' },
      { title: 'XS (480px and up)', value: 'xs' },
      { title: 'SM (768px and up)', value: 'sm' },
      { title: 'MD (940px and up)', value: 'md' },
      { title: 'LG (1200px and up)', value: 'lg' },
      { title: 'XL (1600px and up)', value: 'xl' },
    ],
  },
  validation: (Rule) => Rule.required(),
  ...props,
})

const widths = [
  { title: 'Prose (optimal for text)', value: 'w-prose' },
  { title: 'XS (20rem)', value: 'w-xs' },
  { title: 'SM (24rem)', value: 'w-sm' },
  { title: 'MD (28rem)', value: 'w-md' },
  { title: 'LG (32rem)', value: 'w-lg' },
  { title: 'XL (36rem)', value: 'w-xl' },
  { title: '2XL (42rem)', value: 'w-2xl' },
  { title: '3XL (48rem)', value: 'w-3xl' },
  { title: '4XL (56rem)', value: 'w-4xl' },
  { title: '5XL (64rem)', value: 'w-5xl' },
  { title: '6XL (72rem)', value: 'w-6xl' },
  { title: '7XL (80rem)', value: 'w-7xl' },
]

export const width = ({ ...props } = {}) => {
  return {
    title: 'Width',
    name: 'Width',
    type: 'string',
    description: 'Set the width for this block.',
    options: {
      list: widths,
    },
    ...props,
  }
}

export const maxWidth = ({ ...props } = {}) => {
  const optionsList = widths.map((width) => ({
    ...width,
    value: `max-${width.value}`,
  }))

  return {
    title: 'Max Width',
    name: 'maxWidth',
    type: 'string',
    description: 'Set the max width for this block.',
    options: {
      list: optionsList,
    },
    ...props,
  }
}

export const paddingTop = ({ ...props } = {}) => ({
  title: 'Padding Top',
  name: 'paddingTop',
  type: 'string',
  options: {
    list: [
      { title: '2px', value: 'pt-2' },
      { title: '4px', value: 'pt-4' },
      { title: '8px', value: 'pt-8' },
      { title: '16px', value: 'pt-16' },
      { title: '24px', value: 'pt-24' },
      { title: '32px', value: 'pt-32' },
      { title: '48px', value: 'pt-48' },
      { title: '64px', value: 'pt-64' },
    ],
  },
  ...props,
})

export const paddingBottom = ({ ...props } = {}) => ({
  title: 'Padding Bottom',
  name: 'paddingBottom',
  type: 'string',
  options: {
    list: [
      { title: '2px', value: 'pb-2' },
      { title: '4px', value: 'pb-4' },
      { title: '8px', value: 'pb-8' },
      { title: '16px', value: 'pb-16' },
      { title: '24px', value: 'pb-24' },
      { title: '32px', value: 'pb-32' },
      { title: '48px', value: 'pb-48' },
      { title: '64px', value: 'pb-64' },
    ],
  },
  ...props,
})

export const paddingLeft = ({ ...props } = {}) => ({
  title: 'Padding Left',
  name: 'paddingLeft',
  type: 'string',
  options: {
    list: [
      { title: '2px', value: 'pl-2' },
      { title: '4px', value: 'pl-4' },
      { title: '8px', value: 'pl-8' },
      { title: '16px', value: 'pl-16' },
      { title: '24px', value: 'pl-24' },
      { title: '32px', value: 'pl-32' },
      { title: '48px', value: 'pl-48' },
      { title: '64px', value: 'pl-64' },
    ],
  },
  ...props,
})

export const paddingRight = ({ ...props } = {}) => ({
  title: 'Padding Right',
  name: 'paddingRight',
  type: 'string',
  options: {
    list: [
      { title: '2px', value: 'pr-2' },
      { title: '4px', value: 'pr-4' },
      { title: '8px', value: 'pr-8' },
      { title: '16px', value: 'pr-16' },
      { title: '24px', value: 'pr-24' },
      { title: '32px', value: 'pr-32' },
      { title: '48px', value: 'pr-48' },
      { title: '64px', value: 'pr-64' },
    ],
  },
  ...props,
})

export const alignSelf = ({ ...props } = {}) => ({
  title: 'Align Self',
  name: 'alignSelf',
  type: 'string',
  options: {
    list: [
      { title: 'Top', value: 'self-start' },
      { title: 'Middle', value: 'self-center' },
      { title: 'Bottom', value: 'self-end' },
    ],
  },
  ...props,
})

export const justifySelf = ({ ...props } = {}) => ({
  title: 'Justify Self',
  name: 'justifySelf',
  type: 'string',
  options: {
    list: [
      { title: 'Left', value: 'justify-self-start' },
      { title: 'Center', value: 'justify-self-center' },
      { title: 'Right', value: 'justify-self-end' },
    ],
  },
  ...props,
})

export const alignItems = ({ ...props } = {}) => ({
  title: 'Align Items',
  name: 'alignItems',
  type: 'string',
  options: {
    list: [
      { title: 'Top', value: 'items-start' },
      { title: 'Middle', value: 'items-center' },
      { title: 'Bottom', value: 'items-end' },
    ],
  },
  ...props,
})

export const justifyContent = ({ ...props } = {}) => ({
  title: 'Justify Content',
  name: 'justifyContent',
  type: 'string',
  options: {
    list: [
      { title: 'Left', value: 'justify-start' },
      { title: 'Center', value: 'justify-center' },
      { title: 'Right', value: 'justify-end' },
    ],
  },
  ...props,
})

export const order = ({ ...props } = {}) => ({
  title: 'Order',
  name: 'order',
  type: 'string',
  options: {
    list: [
      { title: '1', value: 'order-1' },
      { title: '2', value: 'order-2' },
      { title: '3', value: 'order-3' },
      { title: '4', value: 'order-4' },
      { title: '5', value: 'order-5' },
      { title: '6', value: 'order-6' },
      { title: '7', value: 'order-7' },
      { title: '8', value: 'order-8' },
      { title: '9', value: 'order-9' },
      { title: '10', value: 'order-10' },
      { title: '11', value: 'order-11' },
      { title: '12', value: 'order-12' },
    ],
  },
  ...props,
})

const colors = [
  { title: 'Black', value: 'black' },
  { title: 'White', value: 'white' },
  { title: 'Blue', value: 'blue' },
  { title: 'Coral', value: 'coral' },
  { title: 'Light Blue', value: 'lightBlue' },
  { title: 'Red', value: 'red' },
  { title: 'Green', value: 'green' },
  { title: 'Yellow', value: 'yellow' },
  { title: 'Pink', value: 'pink' },
  { title: 'Premium Blue', value: 'premiumBlue' },
]

export const color = ({ ...props } = {}) => ({
  title: 'Color',
  name: 'color',
  type: 'string',
  options: {
    list: [
      { title: 'Black', value: 'black' },
      { title: 'White', value: 'white' },
      { title: 'Blue', value: 'blue' },
      { title: 'Coral', value: 'coral' },
      { title: 'Light Blue', value: 'lightBlue' },
      { title: 'Red', value: 'red' },
      { title: 'Green', value: 'green' },
      { title: 'Yellow', value: 'yellow' },
      { title: 'Pink', value: 'pink' },
      { title: 'Premium Blue', value: 'premiumBlue' },
    ],
  },
  ...props,
})

export const textColor = ({ ...props } = {}) => {
  const optionsList = colors.map((color) => ({
    ...color,
    value: `text-${color.value}`,
  }))

  return {
    title: 'Text Color',
    name: 'textColor',
    type: 'string',
    options: {
      list: optionsList,
    },
    ...props,
  }
}

export const backgroundColor = ({ ...props } = {}) => {
  const optionsList = colors.map((color) => ({
    ...color,
    value: `bg-${color.value}`,
  }))

  return {
    title: 'Background Color',
    name: 'backgroundColor',
    type: 'string',
    options: {
      list: optionsList,
    },
    ...props,
  }
}
