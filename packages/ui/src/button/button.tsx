import { ButtonHTMLAttributes } from 'react'
import { CoreSizes } from '../../types'
import { Loading } from '../components/loading'

import { StyledButton } from './styles'

export type ButtonSizes = CoreSizes
export type ButtonRef = HTMLButtonElement

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizes
  loading?: boolean
}

export const Button = ({ children, loading, size = 'medium', ...rest }: ButtonProps) => (
  <StyledButton size={size} {...rest}>
    {loading ? <Loading /> : children}
  </StyledButton>
)
