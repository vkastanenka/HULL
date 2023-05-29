import React from 'react'
import cx from 'classnames'

import BlockContent from '@components/block-content'

const Freeform = ({ data }) => {
  const { maxWidth, textAlign, content } = data

  // console.log(maxWidth, textAlign)

  return (
    <BlockContent
      // className={cx(maxWidth, textAlign, 'mx-auto')}
      className={cx(maxWidth, textAlign, 'mx-auto')}
      blocks={content}
    />
  )
}

export default Freeform
