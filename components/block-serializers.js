import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import cx from 'classnames'

import Photo from '@components/photo'
import CustomLink from '@components/link'

const regexTypography = /^body\d|^large|^header\d|^normal/

const Typography = ({ variant, ...props }) => {
  const data = {
    El: 'p',
    className: 'is-body1',
  }

  switch (variant) {
    case 'body2':
      data.className = 'is-body2'
      break

    case 'body3':
      data.className = 'is-body3'
      break

    case 'body4':
      data.className = 'is-body4'
      break

    case 'large':
      data.className = 'is-large'
      break

    case 'header1':
      data.El = 'h1'
      data.className = 'is-header1'
      break

    case 'header2':
      data.El = 'h2'
      data.className = 'is-header2'
      break

    case 'header3':
      data.El = 'h3'
      data.className = 'is-header3'
      break

    case 'header4':
      data.El = 'h4'
      data.className = 'is-header4'
      break
  }

  return <data.El className={cx(data.className)} {...props} />
}

export const blockSerializers = {
  types: {
    block: (props) => {
      const { markDefs, style = 'normal' } = props.node

      if (regexTypography.test(style)) {
        return <Typography variant={style}>{props.children}</Typography>
      }

      // handle all other blocks with the default serializer
      return BlockContent.defaultSerializers.types.block(props)
    },
    photo: ({ node }) => {
      return <Photo photo={node} />
    },
    horizontalRule: () => <hr />,
  },
  marks: {
    elementRender: ({ mark, children }) => (
      <span className={cx(mark.element)}>{children}</span>
    ),
    link: ({ mark, children }) => {
      const { 0: title } = children

      return <CustomLink link={{ ...mark, title }} />
    },
    numeric: ({ children }) => <span className="is-numeric">{children}</span>,
    sup: ({ children }) => <sup>{children}</sup>,
  },
}
