import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonRef = HTMLButtonElement;

export const Button = StyledButton;
