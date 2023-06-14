import React from 'react'
import cx from 'classnames'

import Freeform from '@components/freeform'
import Photo from '@components/photo'
import Section from '@components/section'

import { getColumnSettings, getColumnContentSettings } from '@lib/settings'

const Grid = ({ data = {} }) => {
  const { size, columns, settings } = data

  return (
    <Section data={settings}>
      <div className={`grid ${size} gap-x-16 gap-y-16`}>
        {columns.map((col, key) => {
          const { sizes, blocks } = col

          return (
            <div key={key} className={cx(getColumnSettings(sizes))}>
              <div className={cx(getColumnContentSettings(sizes))}>
                {blocks?.map((block, key) => (
                  <GridBlock key={key} block={block} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

const GridBlock = ({ block }) => {
  const type = block._type

  switch (type) {
    case 'freeform':
      return <Freeform data={block} />
    case 'photo':
      return <Photo photo={block} />
    default:
      return null
  }
}

export default Grid
