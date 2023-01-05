import { spacing, styled } from '../../stitches.config'

export const InputContainer = styled('div', {})

export const StyledInput = styled('input', {
  paddingBlock: spacing(4.5),
  paddingInline: '$5',

  fontSize: '$medium',
  color: '$gray100',

  border: '2px solid',
  borderColor: '$stroke',
  borderRadius: '4px',

  outline: 'none',
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

export const StyledError = styled('small', {
  display: 'inline-block',
  marginTop: '$2',

  fontSize: 'small',
  color: '$red500',
})
