import { describe, expect, it } from 'vitest'
import { validateCreateUser, validateUpdateUser } from './user'

describe('Validate User Creation', () => {
  it('should valid an user creation', () => {
    expect(
      validateCreateUser({
        name: 'John',
        email: 'john@example.com',
        password: '123456',
      })
    ).toStrictEqual({
      name: 'John',
      email: 'john@example.com',
      password: '123456',
    })
  })

  it('should not valid an user creation without name', () => {
    expect(() =>
      validateCreateUser({
        name: undefined as any,
        email: 'john@example.com',
        password: '123456',
      })
    ).toThrowError('The name is required')
  })

  it('should not valid an user creation with empty name', () => {
    expect(() =>
      validateCreateUser({
        name: '',
        email: 'john@example.com',
        password: '123456',
      })
    ).toThrowError('The name should not be empty')
  })

  it('should not valid an user creation with invalid name type', () => {
    expect(() =>
      validateCreateUser({
        name: true as any,
        email: 'john@example.com',
        password: '123456',
      })
    ).toThrowError('The name must be a text')
  })
})

describe('Validate User Update', () => {
  it('should valid an user update', () => {
    expect(
      validateUpdateUser({
        name: 'John',
        password: '123456',
      })
    ).toStrictEqual({
      name: 'John',
      password: '123456',
    })
  })

  it('should not valid an user update with email', () => {
    expect(() =>
      validateUpdateUser({
        name: 'John',
        email: 'john@hotmail.com',
        password: '123456',
      } as any)
    ).toThrowError('Email cannot be edited')
  })
})
