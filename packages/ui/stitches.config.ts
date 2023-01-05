import { createStitches } from '@stitches/react'

export const { styled, css, getCssText, keyframes } = createStitches({
  theme: {
    colors: {
      'common-white': 'hsl(0, 0%, 100%)',
      'common-black': 'hsl(220, 33%, 9%)',

      primary300: 'hsl(233, 100%, 70%)',
      primary400: 'hsl(230, 88%, 61%)',
      primary500: 'hsl(230, 80%, 55%)',
      primary700: 'hsl(230, 80%, 50%)',

      gray100: 'hsl(0, 0%, 97%)',
      gray200: 'hsl(0, 0%, 94%)',
      gray300: 'hsl(0, 0%, 88%)',
      gray350: 'hsl(0, 0%, 87%)',
      gray500: 'hsl(0, 0%, 58%)',
      gray600: 'hsl(0, 0%, 48%)',
      gray700: 'hsl(0, 0%, 36%)',
      gray800: 'hsl(0, 0%, 30%)',

      blue200: 'hsl(217, 100%, 61%)',

      red500: 'hsl(0, 62%, 54%)',

      black600: 'hsl(180, 2%, 8%)',
      black700: 'hsl(180, 4%, 5%)',

      stroke: 'hsl(0, 0%, 0%)',
    },
    zIndices: {
      'float-index': 2,
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
    },
    fontSizes: {
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      extraLarge: '2.6rem',
      wide: '3.2rem',
    },
  },
  media: {
    xs: '(min-width: 0px)',
    sm: '(min-width: 360px)',
    md: '(min-width: 700px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1200px)',
    '2xl': '(min-width: 1440px)',
  },
})

export function spacing(value: number) {
  return value * 4
}
