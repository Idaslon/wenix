import { describe, expect, it } from "vitest";
import { InMemoryUsersRepository } from "../repositories/in-memory/users-repository";
import { CreateUser } from "./create-user";

import { Login } from './login'

describe('Login', () => {
  it('should be able to login an user', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const createUser = new CreateUser(usersRepository)
    const login = new Login(usersRepository)

    await createUser.execute({
      name: 'John',
      email: 'john@example.com',
      password: '123'
    })

    const loginResponse = await login.execute({
      email: 'john@example.com',
      password: '123'
    })

    expect(loginResponse.user.name).toBe('John')
    expect(loginResponse.user.email).toBe('john@example.com')
  })

  it('should have correct token', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const createUser = new CreateUser(usersRepository)
    const login = new Login(usersRepository)

    await createUser.execute({
      name: 'John',
      email: 'john@example.com',
      password: '123'
    })

    const loginResponse = await login.execute({
      email: 'john@example.com',
      password: '123'
    })

    expect(loginResponse.user.name).toBe('John')
    expect(loginResponse.user.email).toBe('john@example.com')
  })
})
