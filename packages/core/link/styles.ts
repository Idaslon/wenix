import { default as NextLink } from 'next/link';
import { styled } from '@wenix/stitches';

export const StyledLink = styled(NextLink, {
  color: '$common-white',
  textDecoration: 'none',

  outline: 'none',

  '&:hover, &:focus': {
    textDecoration: 'underline',
  },
});
