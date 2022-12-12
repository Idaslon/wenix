import { expect, test } from 'vitest'
import { createUser } from './user'

test('create an user', () => {
  expect(
    createUser({
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

test('cannot create an user without name', () => {
  expect(() =>
    createUser({
      name: undefined as any,
      email: 'john@example.com',
      password: '123456',
    })
  ).toThrowError()
})

test('cannot create an user without email', () => {
  expect(() =>
    createUser({
      name: 'John',
      email: undefined as any,
      password: '123456',
    })
  ).toThrowError()
})

test('cannot create an user without password', () => {
  expect(() =>
    createUser({
      name: 'John',
      email: 'john@example.com',
      password: undefined as any,
    })
  ).toThrowError()
})
