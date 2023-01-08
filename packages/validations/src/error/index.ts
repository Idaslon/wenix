import { ZodError } from 'zod'

export interface ValidationIssue {
  message: string
  path: string
}

export class ValidationError extends Error {
  constructor(public issues: ValidationIssue[]) {
    super(issues[0].message || 'Validation Error')
  }

  static fromZodError(error: ZodError) {
    const issues = error.issues.map((issue) => ({
      message: issue.message,
      path: issue.path.join('.'),
    }))

    return new ValidationError(issues)
  }
}
