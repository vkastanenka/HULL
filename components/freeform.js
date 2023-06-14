import React from 'react'
import cx from 'classnames'

import BlockContent from '@components/block-content'

import { getBlockSettings } from '@lib/settings'

const Freeform = ({ data }) => {
  const { content, settings } = data

  return (
    <BlockContent className={cx(getBlockSettings(settings))} blocks={content} />
  )
}

export default Freeform
