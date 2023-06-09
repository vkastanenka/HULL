import React from 'react'
import cx from 'classnames'

import Freeform from '@components/freeform'
import AccordionList from '@components/accordion-list'

const Grid = ({ data = {} }) => {
  const {
    size,
    columns,
    textColor,
    backgroundColor,
    paddingTop,
    paddingBottom,
    includeGutterLeft,
    includeGutterRight,
  } = data

  const getGridSize = (
    breakpoint,
    size,
    justify = false,
    align = false,
    start = false,
    order = false
  ) => {
    const hasBreakpoint = breakpoint && breakpoint.trim()
    const colSpan = hasBreakpoint
      ? `${breakpoint}:col-span-${size}`
      : `col-span-${size}`

    const colStart = hasBreakpoint
      ? `${breakpoint}:col-start-${start}`
      : `col-start-${start}`

    const colJustify = hasBreakpoint ? `${breakpoint}:${justify}` : justify
    const colAlign = hasBreakpoint ? `${breakpoint}:${align}` : align
    const colOrder = hasBreakpoint ? `${breakpoint}:order-${order}` : `order-${order}`

    return cx(
      colSpan,
      start && colStart,
      justify && colJustify,
      align && colAlign,
      order && colOrder
    )
  }

  return (
    <section
      className={cx('section', paddingTop, paddingBottom)}
      style={{
        color: textColor.color.hex,
        backgroundColor: backgroundColor.color.hex,
      }} // TODO: Update values in sanity to tailwind
    >
      {includeGutterLeft && <div className="section__gutter--left" />}
      <div className="section--content">
        <div className={`grid grid-cols-${size} gap-x-16 gap-y-16`}>
          {columns.map((col, key) => {
            const { sizes, blocks } = col

            return (
              <div
                key={key}
                className={cx(
                  sizes.map((size) =>
                    getGridSize(
                      size.breakpoint,
                      size.width,
                      size.justify,
                      size.align,
                      size.start,
                      size.order
                    )
                  )
                )}
              >
                {blocks.map((block, key) => (
                  <GridBlock key={key} block={block} />
                ))}
              </div>
            )
          })}
        </div>
      </div>
      {includeGutterRight && <div className="section__gutter--right" />}
    </section>
  )
}

const GridBlock = ({ block }) => {
  const type = block._type

  switch (type) {
    case 'freeform':
      return <Freeform data={block} />
    case 'accordions':
      return <AccordionList data={block} />
    default:
      return null
  }
}

export default Grid
