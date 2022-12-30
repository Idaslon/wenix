import { z } from 'zod'
import { emailSchema, passwordSchema } from '../shared'

const nameSchema = z
  .string({
    required_error: 'The name is required',
    invalid_type_error: 'The name must be a text',
  })
  .min(1, {
    message: 'The name should not be empty',
  })

export const createUserSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
})

export const updateUserSchema = z.object({
  name: nameSchema.optional(),
  email: z.custom((value) => !Boolean(value), { message: 'Email cannot be edited' }),
  password: passwordSchema.optional(),
})

export type ValidateCreateUserProps = z.infer<typeof createUserSchema>
export type ValidateUpdateUserProps = Omit<z.infer<typeof updateUserSchema>, 'email'>

export function validateCreateUser(props: ValidateCreateUserProps) {
  const user = createUserSchema.parse(props)
  return user
}

export function validateUpdateUser(props: ValidateUpdateUserProps) {
  const user = updateUserSchema.parse(props)
  return user
}
