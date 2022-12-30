import { describe, expect, it } from 'vitest'
import { validateLogin } from './auth'

describe('Validate login', () => {
  it('should valid a login', () => {
    expect(
      validateLogin({
        email: 'john@example.com',
        password: '123456',
      })
    ).toStrictEqual({
      email: 'john@example.com',
      password: '123456',
    })
  })

  it('should not valid a login without email', () => {
    expect(() =>
      validateLogin({
        email: undefined as any,
        password: '123456',
      })
    ).toThrowError('The email is required')
  })

  it('should not valid a login with empty email', () => {
    expect(() =>
      validateLogin({
        email: '',
        password: '123456',
      })
    ).toThrowError('Invalid email')
  })

  it('should not valid a login with invalid email', () => {
    expect(() =>
      validateLogin({
        email: 'wrongEmail',
        password: '123456',
      })
    ).toThrowError('Invalid email')
  })

  it('should not valid a login with invalid email type', () => {
    expect(() =>
      validateLogin({
        email: true as any,
        password: '123456',
      })
    ).toThrowError('The email must be a text')
  })

  it('should not valid a login without password', () => {
    expect(() =>
      validateLogin({
        email: 'john@example.com',
        password: undefined as any,
      })
    ).toThrowError('The password is required')
  })

  it('should not valid a login with password length less than 6', () => {
    expect(() =>
      validateLogin({
        email: 'john@example.com',
        password: '12345',
      })
    ).toThrowError('The password should have at least 6 characters')
  })

  it('should not valid a login with invalid password type', () => {
    expect(() =>
      validateLogin({
        email: 'john@example.com',
        password: true as any,
      })
    ).toThrowError('The password must be a text')
  })
})
