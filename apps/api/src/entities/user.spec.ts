import { expect, test } from 'vitest'
import { User } from './user'

test('create an user', () => {
  const user = new User({
    name: 'John',
    email: 'john@wenix.com',
  })

  expect(user).toBeInstanceOf(User)
})

test('cannot create an user without name', () => {
  expect(() => {
    return new User({
      name: undefined as any,
      email: 'john@wenix.com',
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
