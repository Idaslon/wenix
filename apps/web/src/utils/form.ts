import { validateSchema, ValidationError } from '@wenix/validations'
import { ValidationIssue } from '@wenix/validations/src/error'

function formatIssues(issues: ValidationIssue[]) {
  const formattedIssues = issues.reduce(
    (total, current) => ({
      ...total,
      [current.path]: current.message,
    }),
    {}
  )

  return formattedIssues
}

export function safeFormValidation<T extends Record<string, any>>(schema: any, data: T) {
  try {
    const response = validateSchema(schema, data)
    return {
      data: response,
      issues: null,
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      const formattedIssues = formatIssues(error.issues)
      return {
        data: null,
        issues: formattedIssues,
      }
    }

    return {
      data: null,
      issues: null,
    }
  }
}
