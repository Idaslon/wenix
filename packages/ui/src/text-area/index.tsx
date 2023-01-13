import { TextareaHTMLAttributes } from 'react'
import { StyledTextArea } from './styles'

export type InputRef = HTMLInputElement

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>
export type TextAreaRef = HTMLTextAreaElement

export const TextArea = StyledTextArea
