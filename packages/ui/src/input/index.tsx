import { InputHTMLAttributes, HtmlHTMLAttributes } from 'react'
import { InputContainer, StyledError, StyledInput } from './styles'

export type InputRef = HTMLInputElement

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  containerProps?: HtmlHTMLAttributes<HTMLDivElement>
  errorProps?: HtmlHTMLAttributes<HTMLSpanElement>
}

export const Input = ({ containerProps, error, errorProps, ...props }: InputProps) => {
  return (
    <InputContainer {...containerProps}>
      <StyledInput {...props} />
      {error && <StyledError {...errorProps}>{error}</StyledError>}
    </InputContainer>
  )
}
