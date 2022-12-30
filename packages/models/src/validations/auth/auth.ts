import { z } from 'zod'
import { validateSchema } from '../../utils'

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'The email is required',
      invalid_type_error: 'The email must be a text',
    })
    .email({
      message: 'Invalid email',
    }),
  password: z
    .string({
      required_error: 'The password is required',
      invalid_type_error: 'The password must be a text',
    })
    .min(6, {
      message: 'The password should have at least 6 characters',
    }),
})

export type ValidateLoginProps = z.infer<typeof loginSchema>

export function validateLogin(props: ValidateLoginProps) {
  const response = validateSchema(loginSchema, props)
  return response
}
