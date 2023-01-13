import { default as NextLink } from 'next/link'
import { styled } from '../../stitches.config'

export const StyledLink = styled(NextLink, {
  color: '$common-white',
  textDecoration: 'none',

  '&:hover, &:focus': {
    textDecoration: 'underline',
  },
})
