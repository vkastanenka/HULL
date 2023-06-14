import React from 'react'
import cx from 'classnames'

import Freeform from '@components/freeform'
import Photo from '@components/photo'

import {
  getSectionSettings,
  getColumnSettings,
  getColumnContentSettings,
} from '@lib/settings'

const Grid = ({ data = {} }) => {
  const { size, columns, settings } = data

  return (
    <section className={cx(getSectionSettings(settings))}>
      <div className="section--content">
        <div
          className={`grid ${size} gap-x-4 gap-y-4 sm:gap-x-8 lg:gap-x-12 lg:gap-y-6`}
        >
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
      </div>
    </section>
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
