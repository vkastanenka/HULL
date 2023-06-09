import React from 'react'
import cx from 'classnames'

// TODO: Find place to localize into theme
const screens = {
  xs: '480px',
  sm: '768px',
  md: '940px',
  lg: '1200px',
  xl: '1600px',
}

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
