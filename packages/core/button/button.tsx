import { ButtonHTMLAttributes } from 'react';

import { CoreSizes } from '../types';
import { StyledButton } from './styles';

export type ButtonSizes = CoreSizes;
export type ButtonRef = HTMLButtonElement;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizes;
}

export const Button = ({ children, size = 'medium', ...rest }: ButtonProps) => (
  <StyledButton size={size} {...rest}>
    {children}
  </StyledButton>
);
