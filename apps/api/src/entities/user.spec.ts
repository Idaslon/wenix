import { expect, test } from 'vitest'
import { User } from './user'

test('create an user', () => {
  const user = new User({
    name: 'John',
    email: 'john@example.com',
  })

  expect(user).toBeInstanceOf(User)
})

test('cannot create an user without name', () => {
  expect(() => {
    return new User({
      name: undefined as any,
      email: 'john@example.com',
    })
  }).toThrowError()
})

test('cannot create an user without email', () => {
  expect(() => {
    return new User({
      name: 'John',
      email: undefined as any,
    })
  }).toThrowError()
})
