import { LinkProps as NextLinkProps } from 'next/link';
import { forwardRef } from 'react';
import { StyledLink } from './styles';

export type LinkProps = React.PropsWithChildren<NextLinkProps>;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ children, ...rest }, ref) => {
  return (
    <StyledLink ref={ref} {...rest}>
      {children}
    </StyledLink>
  );
});
