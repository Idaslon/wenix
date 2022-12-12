import { z } from 'zod'

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})

export type CreateUserProps = z.infer<typeof userSchema>
export type User = z.infer<typeof userSchema>

export function createUser(props: CreateUserProps) {
  const user = userSchema.parse(props)
  return user
}
