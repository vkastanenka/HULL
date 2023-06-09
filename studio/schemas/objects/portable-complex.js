import React from 'react'

import { Button } from '../../components/block-renders'
import { Repeat } from 'phosphor-react'

import customImage from '../../lib/custom-image'

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
        ],
      },
    },
    customImage(),
    {
      type: 'horizontalRule',
    },
  ],
}
