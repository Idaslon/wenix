import { spacing, styled } from '../../stitches.config'

export const StyledTextArea = styled('textarea', {
  paddingBlock: spacing(4.5),
  paddingInline: '$5',

  fontSize: '$medium',
  color: '$gray100',

  border: '2px solid',
  borderColor: '$stroke',
  borderRadius: '4px',

  backgroundColor: '$black700',

  '&::placeholder': {
    color: '$gray700',
    opacity: 1,
  },

  '&:-ms-input-placeholder': {
    color: '$gray700',
  },

  '&::-ms-input-placeholder': {
    color: '$gray700',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:focus': {
    borderColor: '$primary400',
  },
})
