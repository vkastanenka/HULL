import React from 'react'
import cx from 'classnames'

import CheckCircle from 'public/CheckCircle.svg'
import CheckCircleFilled from 'public/CheckCircleFilled.svg'

const ListItemContainer = ({ children, ...props }) => (
  <div {...props}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }}>
      {children}
    </div>
  </div>
)

export const ListItemIcon = ({ children, iconClassName, type, ...props }) => {
  const [Icon, setIcon] = React.useState()

  React.useEffect(() => {
    switch (type) {
      case 'checkCircle':
        setIcon(CheckCircle)
        break

      case 'checkCircleFilled':
        setIcon(CheckCircleFilled)
        break
    }
  }, [type])

  return (
    <ListItemContainer {...props}>
      {Icon && <Icon className={cx(iconClassName)} />}
      {children}
    </ListItemContainer>
  )
}

export const ListItemNumber = ({ children, number, ...props }) => {
  const marker = (
    <div
      style={{
        borderRadius: '50%',
        border: 'solid black 0.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
      {...props}
    >
      <p>{number}</p>
    </div>
  )

  return (
    <ListItemContainer {...props}>
      {marker}
      {children}
    </ListItemContainer>
  )
}
