import { forwardRef, InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});
