import { InputHTMLAttributes } from 'react';
import { StyledInput } from './styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;
export type InputRef = HTMLInputElement;

export const Input = StyledInput;
