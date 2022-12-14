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

test('cannot create an user with empty name', () => {
  expect(() =>
    createUser({
      name: '',
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

test('cannot create with invalid email', () => {
  expect(() =>
    createUser({
      name: 'John',
      email: 'noEmail',
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

test('cannot create an user with password length less than 6', () => {
  expect(() =>
    createUser({
      name: 'John',
      email: 'john@example.com',
      password: '12345',
    })
  ).toThrowError()
})
