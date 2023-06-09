import React from 'react'
import client from '../../lib/client'

import { Button } from '../../components/block-renders'
import { Repeat, CheckCircle as CheckCirclePhosphor } from 'phosphor-react'
import {
  CheckCircle,
  CheckCircleFilled,
  ZeroCircle,
  OneCircle,
  TwoCircle,
  ThreeCircle,
  FourCircle,
  FiveCircle,
  SixCircle,
  SevenCircle,
  EightCircle,
  NineCircle,
} from '../../components/svg'
import cx from 'classnames'

import customImage from '../../lib/custom-image'

const icons = {
  checkCircle: CheckCircle,
  checkCircleFilled: CheckCircleFilled,
  zeroCircle: ZeroCircle,
  oneCircle: OneCircle,
  twoCircle: TwoCircle,
  threeCircle: ThreeCircle,
  fourCircle: FourCircle,
  fiveCircle: FiveCircle,
  sixCircle: SixCircle,
  sevenCircle: SevenCircle,
  eightCircle: EightCircle,
  nineCircle: NineCircle,
}

const iconSizes = {
  ['w-24 md:w-32']: 'icon--32',
  ['w-18 md:w-24']: 'icon--24',
  ['w-18']: 'icon--18',
  ['w-16']: 'icon--16',
}

const gaps = {
  ['gap-16 md:gap-32']: 'gap--32',
  ['gap-16']: 'gap--16',
}

const AsyncListItemIcon = ({ icon, iconSize, iconColor, gap, ...props }) => {
  const IconFinal = icons[icon]
  const [iconColorFinal, setIconColorFinal] = React.useState('#2C5CAA')

  React.useEffect(() => {
    let isMounted = true
    const fetchColor = async () => {
      const hex = await client.fetch(
        `*[_type == "solidColor" && _id == "${iconColor._ref}"][0]{
            color{hex}
          }.color.hex
        `
      )
      if (isMounted && hex) setIconColorFinal(hex)
    }
    fetchColor()
    return () => {
      isMounted = false
    }
  }, [iconColor])

  return (
    <div
      style={{ display: 'flex', alignItems: 'center' }}
      className={cx(gaps[gap])}
    >
      <IconFinal
        className={cx(iconSizes[iconSize])}
        style={{ fill: iconColorFinal }}
      />
      {props.children}
    </div>
  )
}

export default {
  title: 'Rich Text',
  name: 'complexPortableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {
          title: 'Body1',
          value: 'normal',
          blockEditor: {
            render: ({ children }) => (
              <span className="is-body1">{children}</span>
            ),
          },
        },
        {
          title: 'Body2',
          value: 'body2',
          blockEditor: {
            render: ({ children }) => (
              <span className="is-body2">{children}</span>
            ),
          },
        },
        {
          title: 'Body3',
          value: 'body3',
          blockEditor: {
            render: ({ children }) => (
              <span className="is-body3">{children}</span>
            ),
          },
        },
        {
          title: 'Body4',
          value: 'body4',
          blockEditor: {
            render: ({ children }) => (
              <span className="is-body4">{children}</span>
            ),
          },
        },
        {
          title: 'Large',
          value: 'large',
          blockEditor: {
            render: ({ children }) => (
              <span className="is-large">{children}</span>
            ),
          },
        },
        {
          title: 'Header1',
          value: 'header1',
          blockEditor: {
            render: ({ children }) => (
              <span className="is-header1">{children}</span>
            ),
          },
        },
        {
          title: 'Header2',
          value: 'header2',
          blockEditor: {
            render: ({ children }) => (
              <span className="is-header2">{children}</span>
            ),
          },
        },
        {
          title: 'Header3',
          value: 'header3',
          blockEditor: {
            render: ({ children }) => (
              <span className="is-header3">{children}</span>
            ),
          },
        },
        {
          title: 'Header4',
          value: 'header4',
          blockEditor: {
            render: ({ children }) => (
              <span className="is-header4">{children}</span>
            ),
          },
        },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          {
            title: 'Superscript',
            value: 'sup',
            blockEditor: {
              icon: () => (
                <div>
                  x<sup>2</sup>
                </div>
              ),
              render: ({ children }) => <sup>{children}</sup>,
            },
          },
          {
            title: 'Numeric',
            value: 'numeric',
            blockEditor: {
              icon: () => <div>#</div>,
              render: ({ children }) => (
                <span className="numeric">{children}</span>
              ),
            },
          },
        ],
        annotations: [
          {
            // TODO: Have it work like ours
            // TODO: Add tracking
            title: 'Link',
            name: 'link',
            type: 'object',
            blockEditor: {
              render: Button,
            },
            fields: [
              {
                title: 'Link Type',
                name: 'linkType',
                type: 'string',
                options: {
                  list: [
                    { title: 'Internal Page', value: 'internal' },
                    { title: 'External URL', value: 'external' },
                  ],
                },
                initialValue: 'internal',
                validation: (Rule) => Rule.required(),
              },
              {
                title: 'Internal Page',
                name: 'page',
                type: 'reference',
                to: [
                  { type: 'page' },
                  { type: 'collection' },
                  { type: 'product' },
                ],
                hidden: ({ parent }) => parent.linkType !== 'internal',
              },
              {
                title: 'External URL',
                name: 'url',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
                hidden: ({ parent }) => parent.linkType !== 'external',
              },
              // {
              //   title: 'Style as Button?',
              //   name: 'isButton',
              //   type: 'boolean',
              //   initialValue: false,
              // },
              // {
              //   name: 'styles',
              //   type: 'object',
              //   fields: [
              //     {
              //       title: 'Button Style',
              //       name: 'style',
              //       type: 'string',
              //       options: {
              //         list: [
              //           { title: 'Default', value: '' },
              //           { title: 'Primary', value: 'is-primary' },
              //           { title: 'White', value: 'is-white' },
              //         ],
              //         layout: 'radio',
              //       },
              //     },
              //     {
              //       title: 'Large Size',
              //       name: 'isLarge',
              //       type: 'boolean',
              //       options: {
              //         layout: 'checkbox',
              //       },
              //       initialValue: false,
              //     },
              //     {
              //       title: 'Full Width',
              //       name: 'isBlock',
              //       type: 'boolean',
              //       options: {
              //         layout: 'checkbox',
              //       },
              //       initialValue: false,
              //     },
              //   ],
              //   hidden: ({ parent }) => !parent.isButton,
              // },
            ],
          },
          {
            title: 'Element Render',
            name: 'elementRender',
            type: 'object',
            blockEditor: {
              icon: Repeat,
              render: ({ children, element }) => (
                <span className={element}>{children}</span>
              ),
            },
            fields: [
              {
                title: 'Element',
                name: 'element',
                type: 'string',
                description:
                  "Set the typography preset to use for this text. Allows the element to keep it's semantic configuration while using a different typography style preset.",
                options: {
                  list: [
                    { title: 'Body1', value: 'is-body1' },
                    { title: 'Body2', value: 'is-body2' },
                    { title: 'Body3', value: 'is-body3' },
                    { title: 'Body4', value: 'is-body4' },
                    { title: 'Large', value: 'is-large' },
                    { title: 'Header1', value: 'is-header1' },
                    { title: 'Header2', value: 'is-header2' },
                    { title: 'Header3', value: 'is-header3' },
                    { title: 'Header4', value: 'is-header4' },
                  ],
                },
                initialValue: 'is-body1',
                validation: (Rule) => Rule.required(),
              },
            ],
          },
          {
            title: 'List Item Icon',
            name: 'listItemIcon',
            type: 'object',
            blockEditor: {
              icon: CheckCirclePhosphor,
              render: AsyncListItemIcon,
            },
            fields: [
              {
                title: 'Icon',
                name: 'icon',
                type: 'string',
                options: {
                  list: [
                    { title: 'Checkmark Circle', value: 'checkCircle' },
                    {
                      title: 'Checkmark Circle Filled',
                      value: 'checkCircleFilled',
                    },
                    {
                      title: 'Zero Circle',
                      value: 'zeroCircle',
                    },
                    {
                      title: 'One Circle',
                      value: 'oneCircle',
                    },
                    {
                      title: 'Two Circle',
                      value: 'twoCircle',
                    },
                    {
                      title: 'Three Circle',
                      value: 'threeCircle',
                    },
                    {
                      title: 'Four Circle',
                      value: 'fourCircle',
                    },
                    {
                      title: 'Five Circle',
                      value: 'fiveCircle',
                    },
                    {
                      title: 'Six Circle',
                      value: 'sixCircle',
                    },
                    {
                      title: 'Seven Circle',
                      value: 'sevenCircle',
                    },
                    {
                      title: 'Eight Circle',
                      value: 'eightCircle',
                    },
                    {
                      title: 'Nine Circle',
                      value: 'nineCircle',
                    },
                  ],
                },
                initialValue: 'checkCircle',
                validation: (Rule) => Rule.required(),
              },
              {
                title: 'Icon Color',
                name: 'iconColor',
                type: 'reference',
                to: [{ type: 'solidColor' }],
                initialValue: {
                  _type: 'reference',
                  _ref: 'b952f343-8526-4165-bf16-e61f770450b3',
                },
                validation: (Rule) => Rule.required(),
              },
              {
                title: 'Icon Color Hex',
                name: 'iconColorHex',
                type: 'reference',
                to: [
                  { type: 'page' },
                  { type: 'collection' },
                  { type: 'product' },
                ],
                hidden: ({ parent }) => parent.linkType !== 'internal',
              },
              {
                title: 'Icon Size',
                name: 'iconSize',
                type: 'string',
                options: {
                  list: [
                    { title: '16px', value: 'w-16' },
                    { title: '18px', value: 'w-18' },
                    { title: '24px', value: 'w-18 md:w-24' },
                    { title: '32px', value: 'w-24 md:w-32' },
                  ],
                },
                initialValue: 'w-24 md:w-32',
                validation: (Rule) => Rule.required(),
              },
              {
                title: 'Gap',
                name: 'gap',
                type: 'string',
                description: 'Set the space between icon and text.',
                options: {
                  list: [
                    { title: '16px', value: 'gap-16' },
                    { title: '32px', value: 'gap-16 md:gap-32' },
                  ],
                },
                initialValue: 'gap-16',
                validation: (Rule) => Rule.required(),
              },
            ],
          },
        ],
      },
    },
    customImage(),
    {
      type: 'horizontalRule',
    },
  ],
}
