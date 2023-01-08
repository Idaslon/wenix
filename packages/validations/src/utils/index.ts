import { z } from 'zod'
import { ValidationError } from '../error'

export function validateSchema<T extends z.Schema>(schema: T, props: Record<string, any> | string) {
  try {
    const response = schema.parse(props)
    return response as z.infer<typeof schema>
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw ValidationError.fromZodError(error)
    }

    throw error
  }
}
