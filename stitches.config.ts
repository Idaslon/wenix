import { createStitches } from '@stitches/react';

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
      grey350: 'hsl(0, 0%, 87%)',
      grey500: 'hsl(0, 0%, 58%)',
      grey600: 'hsl(0, 0%, 48%)',
      grey700: 'hsl(0, 0%, 36%)',
      grey800: 'hsl(0, 0%, 30%)',

      stroke: 'hsl(0, 0%, 0%)',
    },
    zIndices: {
      'drawer-index': 1,
      'float-index': 2,
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',

      section: '150px',
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
    extraSmall: '(min-width: 0px)',
    small: '(min-width: 360px)',
    medium: '(min-width: 700px)',
    large: '(min-width: 1024px)',
    extraLarge: '(min-width: 1200px)',
    wide: '(min-width: 1440px)',
  },
});

export function spacing(value: number) {
  return value * 4;
}
