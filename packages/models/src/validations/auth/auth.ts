import { z } from 'zod'
import { validateSchema } from '../../utils'
import { emailSchema, passwordSchema } from '../shared'

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export type ValidateLoginProps = z.infer<typeof loginSchema>

export function validateLogin(props: ValidateLoginProps) {
  const response = validateSchema(loginSchema, props)
  return response
}
