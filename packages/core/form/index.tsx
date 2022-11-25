import { forwardRef, FormHTMLAttributes } from 'react';
import { StyledForm } from './styles';

export type FormProps = FormHTMLAttributes<HTMLFormElement>;

export const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  return <StyledForm ref={ref} {...props} />;
});
