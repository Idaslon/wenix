import { z } from 'zod'

export const emailSchema = z
  .string({
    required_error: 'The email is required',
    invalid_type_error: 'The email must be a text',
  })
  .min(1, {
    message: 'The email cannot be empty',
  })
  .email({
    message: 'Invalid email',
  })

export const passwordSchema = z
  .string({
    required_error: 'The password is required',
    invalid_type_error: 'The password must be a text',
  })
  .min(6, {
    message: 'The password should have at least 6 characters',
  })
