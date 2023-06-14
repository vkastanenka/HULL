import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import cx from 'classnames'

import Photo from '@components/photo'
import CustomLink from '@components/link'

const regexTypography = /^body\d|^large|^header\d|^normal/

const Typography = ({ variant, markDefs, ...props }) => {
  const data = {
    El: 'p',
    className: 'typography--body1',
  }

  switch (variant) {
    case 'body2':
      data.className = 'typography--body2'
      break

    case 'body3':
      data.className = 'typography--body3'
      break

    case 'body4':
      data.className = 'typography--body4'
      break

    case 'large':
      data.className = 'typography--large'
      break

    case 'header1':
      data.El = 'h1'
      data.className = 'typography--header1'
      break

    case 'header2':
      data.El = 'h2'
      data.className = 'typography--header2'
      break

    case 'header3':
      data.El = 'h3'
      data.className = 'typography--header3'
      break

    case 'header4':
      data.El = 'h4'
      data.className = 'typography--header4'
      break
  }

  markDefs.forEach((def) => {
    if (def._type === 'render') data.className = ''
  })

  return <data.El className={cx(data.className)} {...props} />
}

export const blockSerializers = {
  types: {
    block: (props) => {
      const { markDefs, style = 'normal' } = props.node

      // // check if our block contains a button
      // const hasButton =
      //   markDefs &&
      //   markDefs.some((c) => c._type === 'link' && c.isButton === true)

      if (regexTypography.test(style)) {
        return (
          <Typography variant={style} markDefs={markDefs}>
            {props.children}
          </Typography>
        )
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
    render: ({ mark, children }) => (
      <span className={cx(mark.element)}>{children}</span>
    ),
    link: ({ mark, children }) => {
      const { 0: title } = children

      return <CustomLink link={{ ...mark, title }} />
    },
    numeric: ({ children }) => (
      <span className="typography--numeric">{children}</span>
    ),
    textAlignCenter: ({ children }) => (
      <span style={{ display: 'block', textAlign: 'center' }}>{children}</span>
    ),
    sup: ({ children }) => <sup>{children}</sup>,
  },
}
