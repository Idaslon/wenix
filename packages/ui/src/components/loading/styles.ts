import { styled, keyframes } from '../../../stitches.config'

const rotateAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const Spinner = styled('div', {
  borderStyle: 'solid',
  borderColor: 'common-white',
  borderTopColor: 'transparent',

  borderRadius: '50%',
  animation: `${rotateAnimation} 1s linear infinite`,

  variants: {
    size: {
      small: {
        width: '14px',
        height: '14px',

        borderWidth: '2px',
      },
      medium: {
        width: '18px',
        height: '18px',

        borderWidth: '2.5px',
      },
      large: {
        width: '32px',
        height: '32px',

        borderWidth: '4.44px',
      },
    },
  },
})
