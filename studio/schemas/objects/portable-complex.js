import React from 'react'

import { Button } from '../../components/block-renders'
import { Repeat, TextAlignCenter } from 'phosphor-react'

import photo from '../../lib/custom-image'

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
              <span className="typography--body1">{children}</span>
            ),
          },
        },
        {
          title: 'Body2',
          value: 'body2',
          blockEditor: {
            render: ({ children }) => (
              <span className="typography--body2">{children}</span>
            ),
          },
        },
        {
          title: 'Body3',
          value: 'body3',
          blockEditor: {
            render: ({ children }) => (
              <span className="typography--body3">{children}</span>
            ),
          },
        },
        {
          title: 'Large',
          value: 'large',
          blockEditor: {
            render: ({ children }) => (
              <span className="typography--large">{children}</span>
            ),
          },
        },
        {
          title: 'Header1',
          value: 'header1',
          blockEditor: {
            render: ({ children }) => (
              <span className="typography--header1">{children}</span>
            ),
          },
        },
        {
          title: 'Header2',
          value: 'header2',
          blockEditor: {
            render: ({ children }) => (
              <span className="typography--header2">{children}</span>
            ),
          },
        },
        {
          title: 'Header3',
          value: 'header3',
          blockEditor: {
            render: ({ children }) => (
              <span className="typography--header3">{children}</span>
            ),
          },
        },
        {
          title: 'Header4',
          value: 'header4',
          blockEditor: {
            render: ({ children }) => (
              <span className="typography--header4">{children}</span>
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
            title: 'Text Align Center',
            value: 'textAlignCenter',
            blockEditor: {
              icon: TextAlignCenter,
              render: ({ children }) => (
                <span style={{ textAlign: 'center', display: 'block' }}>
                  {children}
                </span>
              ),
            },
          },
          {
            title: 'Numeric',
            value: 'numeric',
            blockEditor: {
              icon: () => <div>#</div>,
              render: ({ children }) => (
                <span className="typography--numeric">{children}</span>
              ),
            },
          },
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
        ],
        annotations: [
          {
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
            title: 'Render',
            name: 'render',
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
                    { title: 'Body1', value: 'typography--body1' },
                    { title: 'Body2', value: 'typography--body2' },
                    { title: 'Body3', value: 'typography--body3' },
                    { title: 'Large', value: 'typography--large' },
                    { title: 'Header1', value: 'typography--header1' },
                    { title: 'Header2', value: 'typography--header2' },
                    { title: 'Header3', value: 'typography--header3' },
                    { title: 'Header4', value: 'typography--header4' },
                  ],
                },
                initialValue: 'typography--body1',
                validation: (Rule) => Rule.required(),
              },
            ],
          },
        ],
      },
    },
    photo(),
    // {
    //   type: 'horizontalRule',
    // },
  ],
}
