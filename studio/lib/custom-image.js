import { Camera } from 'phosphor-react'

export default ({ ...props } = {}) => {
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
        options: {
          isHighlighted: true,
        },
      },
      {
        title: 'Settings',
        name: 'settings',
        type: 'array',
        of: [{ type: 'blockSettings' }],
        options: {
          isHighlighted: true,
        },
      },
    ],
    preview: {
      select: {
        asset: 'asset',
        alt: 'asset.alt',
        customAlt: 'alt',
      },
      prepare({ alt, customAlt, asset }) {
        return {
          title: customAlt ?? alt ?? '(alt text missing)',
          media: asset,
        }
      },
    },
    ...props,
  }
}
