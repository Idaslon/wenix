import { beforeEach, describe, expect, it } from 'vitest'
import prisma from '../prisma'
import { JWTAuthService } from '../services/implementation/jwt-auth-service'
import { CreateUser } from './create-user'

import { Login } from './login'

describe('Login', () => {
  beforeEach(async () => {
    await prisma.user.deleteMany({})
  })

  it('should be able to login an user', async () => {
    const jwtAuthService = new JWTAuthService()

    const createUser = new CreateUser()
    const login = new Login(jwtAuthService)

    await createUser.execute({
      name: 'John',
      email: 'john@example.com',
      password: '123456',
    })

    const loginResponse = await login.execute({
      email: 'john@example.com',
      password: '123456',
    })

    expect(loginResponse.user.name).toBe('John')
    expect(loginResponse.user.email).toBe('john@example.com')
  })

  it('should not login with an user that does not exists', async () => {
    const jwtAuthService = new JWTAuthService()

    const login = new Login(jwtAuthService)

    expect(
      login.execute({
        email: 'john@example.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(Error)
  })

  it('should not login with wrong user password', async () => {
    const jwtAuthService = new JWTAuthService()

    const createUser = new CreateUser()
    const login = new Login(jwtAuthService)

    await createUser.execute({
      name: 'John',
      email: 'john@example.com',
      password: '123456',
    })

    expect(
      login.execute({
        email: 'john@example.com',
        password: '1234567',
      })
    ).rejects.toBeInstanceOf(Error)
  })
})

describe('JWT Login', () => {
  beforeEach(async () => {
    await prisma.user.deleteMany({})
  })

  it('should have correct token', async () => {
    const jwtAuthService = new JWTAuthService()

    const createUser = new CreateUser()
    const login = new Login(jwtAuthService)

    await createUser.execute({
      name: 'John',
      email: 'john@example.com',
      password: '123456',
    })

    const loginResponse = await login.execute({
      email: 'john@example.com',
      password: '123456',
    })

    // TODO: Improve these tests with mocked data and spy functions
    expect(jwtAuthService.validateToken(loginResponse.token)).toStrictEqual({
      email: 'john@example.com',
    })
  })
})
