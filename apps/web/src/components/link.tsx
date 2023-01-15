import { LinkProps as NextLinkProps } from 'next/link'
import { default as NextLink } from 'next/link'
import { styled } from '@wenix/ui'

export type LinkProps = React.PropsWithChildren<NextLinkProps>
export type LinkRef = NextLinkProps

export const Link = styled(NextLink, {
  color: '$common-white',
  textDecoration: 'none',

  '&:hover, &:focus': {
    textDecoration: 'underline',
  },
})
