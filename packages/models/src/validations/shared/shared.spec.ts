import { describe, expect, it } from 'vitest'
import { validateSchema } from '../../utils'
import { emailSchema, passwordSchema } from './shared'

describe('Validate Email', () => {
  it('should valid an correct email', () => {
    expect(validateSchema(emailSchema, 'john@gmail.com')).toStrictEqual('john@gmail.com')
  })

  it('should not valid an undefined email', () => {
    expect(() => validateSchema(emailSchema, undefined as any)).toThrowError(
      'The email is required'
    )
  })

  it('should not valid an empty email', () => {
    expect(() => validateSchema(emailSchema, '')).toThrowError('The email cannot be empty')
  })

  it('should not valid an invalid email', () => {
    expect(() => validateSchema(emailSchema, 'notEmail')).toThrowError('Invalid email')
  })

  it('should not valid an invalid email type', () => {
    expect(() => validateSchema(emailSchema, true as any)).toThrowError('The email must be a text')
  })
})

describe('Validate Password', () => {
  it('should valid a correct password', () => {
    expect(validateSchema(passwordSchema, '123456')).toStrictEqual('123456')
  })

  it('should not valid an undefined password', () => {
    expect(() => validateSchema(passwordSchema, undefined as any)).toThrowError(
      'The password is required'
    )
  })

  it('should not valid an empty password', () => {
    expect(() => validateSchema(passwordSchema, '')).toThrowError(
      'The password should have at least 6 characters'
    )
  })

  it('should not valid an invalid password type', () => {
    expect(() => validateSchema(passwordSchema, true as any)).toThrowError(
      'The password must be a text'
    )
  })
})
