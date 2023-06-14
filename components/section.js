import React from 'react'
import cx from 'classnames'

import { getSectionSettings } from '@lib/settings'

const Section = ({ children, data = {} }) => (
  <section className={cx(getSectionSettings(data))}>
    <div
      className={cx(
        'mx-auto',
        `px-30`,
        'xs:px-16',
        'xs:w-bp-xs',
        'sm:w-bp-sm',
        'md:w-bp-md',
        'lg:w-bp-lg'
      )}
    >
      {children}
    </div>
  </section>
)

export default Section
