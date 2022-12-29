import { z } from 'zod'

export class ValidationError extends Error {
  constructor(message: string) {
    super(message)
  }
}

export function validateSchema<T extends z.Schema>(schema: T, props: Record<string, any>) {
  try {
    const response = schema.parse(props)
    return response as z.infer<typeof schema>
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError(error.issues[0].message)
    }

    throw error
  }
}
