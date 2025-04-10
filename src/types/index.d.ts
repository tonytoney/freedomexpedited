/// <reference types="react" />
/// <reference types="next" />

import { SVGProps } from 'react'

declare module 'framer-motion' {
  import * as React from 'react'

  export interface MotionProps {
    initial?: any
    animate?: any
    transition?: any
    className?: string
    onClick?: (e: React.MouseEvent) => void
    children?: React.ReactNode
  }

  export interface MotionStyle extends React.CSSProperties {
    x?: number | string
    y?: number | string
    rotate?: number | string
    scale?: number
    opacity?: number
  }

  export type Motion = {
    [K in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
      MotionProps & JSX.IntrinsicElements[K]
    >
  }

  export const motion: Motion
  export type Variants = {
    [key: string]: MotionStyle
  }
}

declare module '@heroicons/react/24/outline' {
  export const Bars3Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  export const XMarkIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
} 