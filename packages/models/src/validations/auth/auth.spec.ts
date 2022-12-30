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
})
