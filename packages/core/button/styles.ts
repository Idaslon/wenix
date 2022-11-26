import { styled } from '@wenix/stitches';

export const StyledButton = styled('button', {
  paddingBlock: '$4',
  paddingInline: '$5',

  fontSize: '$large',
  fontWeight: 700,

  color: '$common-white',
  backgroundColor: '$primary400 ',

  borderRadius: '4px',
  cursor: 'pointer',

  outline: 'none',
  transition: 'background 300ms ease-in-out',

  '&:hover': {
    backgroundColor: '$primary500',
  },

  '&:active': {
    backgroundColor: '$primary700',
  },

  '&:focus-visible': {
    position: 'relative',

    '&::before': {
      content: '',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',

      width: 'calc(100% + 8px)',
      height: 'calc(100% + 8px)',

      border: '4px solid',
      borderColor: '$blue200',
      borderRadius: '8px',

      backgroundColor: 'transparent',
    },
  },

  '&[disabled]': {
    cursor: 'not-allowed',
    backgroundColor: '$primary300',
  },
});
