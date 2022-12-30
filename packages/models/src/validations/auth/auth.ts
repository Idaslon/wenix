import { z } from 'zod'
import { validateSchema } from '../../utils'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export type ValidateLoginProps = z.infer<typeof loginSchema>

export function validateLogin(props: ValidateLoginProps) {
  const response = validateSchema(loginSchema, props)
  return response
}
