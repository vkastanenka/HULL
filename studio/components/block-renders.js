import React from 'react'
import cx from 'classnames'

export const Button = ({ isButton, styles, children }) => {
  if (!isButton) return children

  return (
    <span
      className={cx('btn', styles?.style, {
        'is-large': styles?.isLarge,
        'is-block': styles?.isBlock,
      })}
    >
      {children}
    </span>
  )
}
