import cx from 'classnames'

/*  ------------------------------ */
/*  Settings helpers
/*  ------------------------------ */

export const getSectionSettings = (settings) => {
  if (!settings || settings.length < 1) return null

  const classNames = settings.map((setting) => {
    const {
      breakpoint,
      backgroundColor = false,
      paddingBottom = false,
      paddingTop = false,
      textColor = false,
    } = setting

    const hasBreakpoint = breakpoint && breakpoint.trim()

    const settingBackgroundColor = hasBreakpoint
      ? `${breakpoint}:${backgroundColor}`
      : backgroundColor
    const settingPaddingBottom = hasBreakpoint
      ? `${breakpoint}:${paddingBottom}`
      : paddingBottom
    const settingPaddingTop = hasBreakpoint
      ? `${breakpoint}:${paddingTop}`
      : paddingTop
    const settingTextColor = hasBreakpoint
      ? `${breakpoint}:${textColor}`
      : textColor

    return cx(
      backgroundColor && settingBackgroundColor,
      paddingBottom && settingPaddingBottom,
      paddingTop && settingPaddingTop,
      textColor && settingTextColor
    )
  })

  return classNames
}

export const getBlockSettings = (settings) => {
  if (!settings || settings.length < 1) return null

  const classNames = settings.map((setting) => {
    const {
      breakpoint,
      justifySelf = false,
      maxWidth = false,
      paddingTop = false,
      paddingBottom = false,
      paddingLeft = false,
      paddingRight = false,
    } = setting

    const hasBreakpoint = breakpoint && breakpoint.trim()

    const settingJustifySelf = hasBreakpoint
      ? `${breakpoint}:${justifySelf}`
      : justifySelf
    const settingMaxWidth = hasBreakpoint
      ? `${breakpoint}:${maxWidth}`
      : maxWidth
    const settingPaddingTop = hasBreakpoint
      ? `${breakpoint}:${paddingTop}`
      : paddingTop
    const settingPaddingBottom = hasBreakpoint
      ? `${breakpoint}:${paddingBottom}`
      : paddingBottom
    const settingPaddingLeft = hasBreakpoint
      ? `${breakpoint}:${paddingLeft}`
      : paddingLeft
    const settingPaddingRight = hasBreakpoint
      ? `${breakpoint}:${paddingRight}`
      : paddingRight

    return cx(
      justifySelf && settingJustifySelf,
      maxWidth && settingMaxWidth,
      paddingTop && settingPaddingTop,
      paddingBottom && settingPaddingBottom,
      paddingLeft && settingPaddingLeft,
      paddingRight && settingPaddingRight
    )
  })

  return classNames
}

export const getColumnSettings = (settings) => {
  if (!settings || settings.length < 1) return null

  const classNames = settings.map((setting) => {
    const {
      alignItems = false,
      breakpoint,
      contentWidth = false,
      justifyContent = false,
      order = false,
      paddingBottom = false,
      paddingLeft = false,
      paddingRight = false,
      paddingTop = false,
      start = false,
      colWidth,
    } = setting

    const hasBreakpoint = breakpoint && breakpoint.trim()

    const colWidthFinal = hasBreakpoint
      ? `${breakpoint}:${colWidth}`
      : `${colWidth}`
    const colStart = hasBreakpoint ? `${breakpoint}:${start}` : start

    const colJustifyContent = hasBreakpoint
      ? `${breakpoint}:${justifyContent}`
      : justifyContent
    const colAlignItems = hasBreakpoint
      ? `${breakpoint}:${alignItems}`
      : alignItems
    const colOrder = hasBreakpoint ? `${breakpoint}:${order}` : order
    const colPaddingTop = hasBreakpoint
      ? `${breakpoint}:${paddingTop}`
      : paddingTop
    const colPaddingBottom = hasBreakpoint
      ? `${breakpoint}:${paddingBottom}`
      : paddingBottom
    const colPaddingLeft = hasBreakpoint
      ? `${breakpoint}:${paddingLeft}`
      : paddingLeft
    const colPaddingRight = hasBreakpoint
      ? `${breakpoint}:${paddingRight}`
      : paddingRight

    const colFlex = hasBreakpoint ? `${breakpoint}:flex` : 'flex'

    return cx(
      colWidthFinal,
      (alignItems || justifyContent) && colFlex,
      start && colStart,
      justifyContent && colJustifyContent,
      alignItems && colAlignItems,
      order && colOrder,
      paddingTop && colPaddingTop,
      paddingBottom && colPaddingBottom,
      paddingLeft && colPaddingLeft,
      paddingRight && colPaddingRight
    )
  })

  return classNames
}

export const getColumnContentSettings = (settings) => {
  if (!settings || settings.length < 1) return null

  const classNames = settings.map((setting) => {
    const { breakpoint, contentWidth = false } = setting

    const hasBreakpoint = breakpoint && breakpoint.trim()

    const colContentWidth = hasBreakpoint
      ? `${breakpoint}:${contentWidth}`
      : contentWidth

    return cx(contentWidth && colContentWidth)
  })

  return classNames
}
