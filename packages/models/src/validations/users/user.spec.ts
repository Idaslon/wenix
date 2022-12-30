import { describe, expect, it, test } from 'vitest'
import { validateCreateUser, validateUser } from './user'

describe('validate user creation', () => {
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
    ).toThrowError()
  })

  it('should not valid an user creation with empty name', () => {
    expect(() =>
      validateCreateUser({
        name: '',
        email: 'john@example.com',
        password: '123456',
      })
    ).toThrowError()
  })

  it('should not valid an user creation without email', () => {
    expect(() =>
      validateCreateUser({
        name: 'John',
        email: undefined as any,
        password: '123456',
      })
    ).toThrowError()
  })

  it('should not valid an user creation with empty email', () => {
    expect(() =>
      validateCreateUser({
        name: 'John',
        email: '',
        password: '123456',
      })
    ).toThrowError()
  })

  it('should not valid an user creation with invalid email', () => {
    expect(() =>
      validateCreateUser({
        name: 'John',
        email: 'wrongEmail',
        password: '123456',
      })
    ).toThrowError()
  })

  it('should not valid an user creation without password', () => {
    expect(() =>
      validateCreateUser({
        name: 'John',
        email: 'john@example.com',
        password: undefined as any,
      })
    ).toThrowError()
  })

  it('should not valid an user creation with password length less than 6', () => {
    expect(() =>
      validateCreateUser({
        name: 'John',
        email: 'john@example.com',
        password: '12345',
      })
    ).toThrowError()
  })
})

describe('validate user', () => {
  it('should valid an user', () => {
    expect(
      validateUser({
        id: 1,
        name: 'John',
        email: 'john@example.com',
        password: '123456',
      })
    ).toStrictEqual({
      id: 1,
      name: 'John',
      email: 'john@example.com',
      password: '123456',
    })
  })

  it('should not valid an user without id', () => {
    expect(() =>
      validateUser({
        id: undefined as any,
        name: 'John',
        email: 'john@example.com',
        password: '123456',
      })
    ).toThrowError()
  })

  it('should not valid an user without name', () => {
    expect(() =>
      validateUser({
        id: 1,
        name: undefined as any,
        email: 'john@example.com',
        password: '123456',
      })
    ).toThrowError()
  })

  it('should not valid an user with empty name', () => {
    expect(() =>
      validateUser({
        id: 1,
        name: '',
        email: 'john@example.com',
        password: '123456',
      })
    ).toThrowError()
  })

  it('should not valid an user without email', () => {
    expect(() =>
      validateUser({
        id: 1,
        name: 'John',
        email: undefined as any,
        password: '123456',
      })
    ).toThrowError()
  })

  it('should not valid an user with empty email', () => {
    expect(() =>
      validateUser({
        id: 1,
        name: 'John',
        email: '',
        password: '123456',
      })
    ).toThrowError()
  })

  it('should not valid an user with invalid email', () => {
    expect(() =>
      validateUser({
        id: 1,
        name: 'John',
        email: 'wrongEmail',
        password: '123456',
      })
    ).toThrowError()
  })

  it('should not valid an user without password', () => {
    expect(() =>
      validateUser({
        id: 1,
        name: 'John',
        email: 'john@example.com',
        password: undefined as any,
      })
    ).toThrowError()
  })

  it('should not valid an user with password length less than 6', () => {
    expect(() =>
      validateUser({
        id: 1,
        name: 'John',
        email: 'john@example.com',
        password: '12345',
      })
    ).toThrowError()
  })
})
