import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import cx from 'classnames'
// import { sanityClient } from '@lib/sanity'
// import { solidColor } from 'data/queries'

import Photo from '@components/photo'
import CustomLink from '@components/link'

const regexTypography = /^body\d|^large|^header\d|^normal/

// import CheckCircle from '../public/CheckCircle.svg'
// import CheckCircleFilled from '../public/CheckCircleFilled.svg'
// import ZeroCircle from '../public/ZeroCircle.svg'
// import OneCircle from '../public/OneCircle.svg'
// import TwoCircle from '../public/TwoCircle.svg'
// import ThreeCircle from '../public/ThreeCircle.svg'
// import FourCircle from '../public/FourCircle.svg'
// import FiveCircle from '../public/FiveCircle.svg'
// import SixCircle from '../public/SixCircle.svg'
// import SevenCircle from '../public/SevenCircle.svg'
// import EightCircle from '../public/EightCircle.svg'
// import NineCircle from '../public/NineCircle.svg'

// const listItemIcons = {
//   checkCircle: CheckCircle,
//   checkCircleFilled: CheckCircleFilled,
//   zeroCircle: ZeroCircle,
//   oneCircle: OneCircle,
//   twoCircle: TwoCircle,
//   threeCircle: ThreeCircle,
//   fourCircle: FourCircle,
//   fiveCircle: FiveCircle,
//   sixCircle: SixCircle,
//   sevenCircle: SevenCircle,
//   eightCircle: EightCircle,
//   nineCircle: NineCircle,
// }

const Typography = ({ variant, ...props }) => {
  const data = {
    El: 'p',
    className: 'is-body1',
  }

  switch (variant) {
    case 'body2':
      data.className = 'is-body2'
      break

    case 'body3':
      data.className = 'is-body3'
      break

    case 'body4':
      data.className = 'is-body4'
      break

    case 'large':
      data.className = 'is-large'
      break

    case 'header1':
      data.El = 'h1'
      data.className = 'is-header1'
      break

    case 'header2':
      data.El = 'h2'
      data.className = 'is-header2'
      break

    case 'header3':
      data.El = 'h3'
      data.className = 'is-header3'
      break

    case 'header4':
      data.El = 'h4'
      data.className = 'is-header4'
      break
  }

  return <data.El className={cx(data.className)} {...props} />
}

// const AsyncListItemIcon = ({ icon, iconSize, iconColorRef, gap, ...props }) => {
//   const IconFinal = listItemIcons[icon]
//   const [iconColorFinal, setIconColorFinal] = React.useState()

//   React.useEffect(() => {
//     let isMounted = true
//     const fetchColor = async () => {
//       // Add try catch with default color if fail
//       const color = await sanityClient.fetch(solidColor(iconColorRef))
//       if (isMounted && color.hex) setIconColorFinal(color.hex)
//     }
//     fetchColor()
//     return () => {
//       isMounted = false
//     }
//   }, [iconColorRef])

//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }} className={cx(gap)}>
//       {iconColorFinal && (
//         <IconFinal className={cx(iconSize)} style={{ fill: iconColorFinal }} />
//       )}
//       {props.children}
//     </div>
//   )
// }

export const blockSerializers = {
  types: {
    block: (props) => {
      const { markDefs, style = 'normal' } = props.node

      // TODO: Rework button logic
      // check if our block contains a button
      // const hasButton =
      //   markDefs &&
      //   markDefs.some((c) => c._type === 'link' && c.isButton === true)

      if (regexTypography.test(style)) {
        return <Typography variant={style}>{props.children}</Typography>
      }

      // handle all other blocks with the default serializer
      return BlockContent.defaultSerializers.types.block(props)
    },
    photo: ({ node }) => {
      return <Photo photo={node} />
    },
    horizontalRule: () => <hr />,
  },
  list: (props) => {
    switch (props.type) {
      case 'bullet':
        return <ul>{props.children}</ul>
    }

    return <ul>{props.children}</ul>
  },
  listItem: (props) => {
    const listItemTypography = (
      <Typography variant={props.node.style}>{props.children}</Typography>
    )

    switch (props.node.listItem) {
      case 'bullet':
        return <li>{listItemTypography}</li>
    }

    return <li>{listItemTypography}</li>
  },
  marks: {
    elementRender: ({ mark, children }) => (
      <span className={cx(mark.element)}>{children}</span>
    ),
    link: ({ mark, children }) => {
      const { 0: title } = children

      return <CustomLink link={{ ...mark, title }} />
    },
    // TODO: Create separate list component
    // listItemIcon: (props) => (
    //   <AsyncListItemIcon
    //     icon={props.mark.icon}
    //     iconSize={props.mark.iconSize}
    //     iconColorRef={props.mark.iconColor._ref}
    //     gap={props.mark.gap}
    //   >
    //     {props.children}
    //   </AsyncListItemIcon>
    // ),
    numeric: ({ children }) => <span className="is-numeric">{children}</span>,
    sup: ({ children }) => <sup>{children}</sup>,
  },
}
