import { z } from 'zod'

const baseUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
})

const createUserSchema = baseUserSchema

const userSchema = baseUserSchema.merge(
  z.object({
    id: z.number(),
  })
)

export type CreateUserProps = z.infer<typeof createUserSchema>
export type ValidateUserProps = z.infer<typeof userSchema>

export type User = z.infer<typeof userSchema>

export function validateCreateUser(props: CreateUserProps) {
  const user = createUserSchema.parse(props)
  return user
}

export function validateUser(props: ValidateUserProps) {
  const user = userSchema.parse(props)
  return user
}
