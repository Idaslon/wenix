import { LinkProps as NextLinkProps } from 'next/link';
import { StyledLink } from './styles';

export type LinkProps = React.PropsWithChildren<NextLinkProps>;
export type LinkRef = NextLinkProps;

export const Link = StyledLink;
