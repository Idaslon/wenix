import { styled } from '../../stitches.config'

export const TypographyH1 = styled('h1', {
  fontWeight: 700,
  fontStyle: 'normal',

  variants: {
    size: {
      small: {},
      medium: {
        fontSize: '2.6rem',
        lineHeight: '3rem',
      },
      large: {
        fontSize: '4rem',
      },
    },
  },
})

export const TypographyH2 = styled('h2', {
  fontWeight: 400,
  fontStyle: 'normal',

  variants: {
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
})

export const TypographyH3 = styled('h3', {
  fontWeight: 300,
  fontStyle: 'normal',

  variants: {
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
})

export const TypographySubtitle1 = styled('h3', {
  fontWeight: 400,
  fontStyle: 'normal',

  variants: {
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
})

export const TypographySubtitle2 = styled('h4', {
  fontWeight: 500,
  fontStyle: 'normal',

  variants: {
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
})

export const TypographyBody1 = styled('p', {
  fontWeight: 500,
  fontStyle: 'normal',

  variants: {
    size: {
      small: {},
      medium: {
        fontSize: '1.6rem',
      },
      large: {},
    },
  },
})

export const TypographyBody2 = styled('span', {
  fontWeight: 400,
  fontStyle: 'normal',

  variants: {
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
})
