import { spacing, styled } from '@wenix/stitches';

export const StyledInput = styled('input', {
  paddingBlock: spacing(4.5),
  paddingInline: '$5',

  fontSize: '$medium',
  color: '$gray100',

  border: '2px solid',
  borderColor: '$stroke',
  borderRadius: '4px',

  outline: 'none',
  backgroundColor: '#0D0E0E',

  '&::placeholder': {
    color: '#5F6F72',
    opacity: 1,
  },

  '&:-ms-input-placeholder': {
    color: '#5F6F72',
  },

  '&::-ms-input-placeholder': {
    color: '#5F6F72',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:focus': {
    borderColor: '$primary400',
  },
});
