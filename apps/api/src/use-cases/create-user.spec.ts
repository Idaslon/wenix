import { describe, expect, it } from "vitest";
import { User } from "../entities/user";
import { InMemoryUsersRepository } from "../repositories/in-memory/users-repository";
import { CreateUser } from "./create-user";

describe('Create User', () => {
  it('should be able to create an user', () => {
    const usersRepository = new InMemoryUsersRepository()
    const createUser = new CreateUser(usersRepository)

    expect(createUser.execute({
      name: 'John',
      email: 'john@example.com',
      password: '123'
    })).resolves.toBeInstanceOf(User)
  })

  it('should not be able to create an user with an email that already exists', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const createUser = new CreateUser(usersRepository)

    await createUser.execute({
      name: 'John',
      email: 'john@example.com',
      password: '123'
    })

    expect(createUser.execute({
      name: 'John 2',
      email: 'john@example.com',
      password: '123'
    })).rejects.toBeInstanceOf(Error)
  })
})
