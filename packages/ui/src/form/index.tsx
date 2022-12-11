import { FormHTMLAttributes } from 'react'
import { StyledForm } from './styles'

export type FormProps = FormHTMLAttributes<HTMLFormElement>
export type FormRef = HTMLFormElement

export const Form = StyledForm
