import { beforeAll, describe, expect, it } from 'vitest'
import { InMemoryUsersRepository } from '../repositories/in-memory/users-repository'
import { CreateUser } from './create-user'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

describe('Create User', () => {
  beforeAll(async () => {
    await prisma.user.deleteMany()
  })

  it('should be able to create an user', () => {
    const usersRepository = new InMemoryUsersRepository()
    const createUser = new CreateUser(usersRepository)

    expect(
      createUser.execute({
        name: 'John',
        email: 'john@example.com',
        password: '123456',
      })
    ).resolves
  })

  it('should not be able to create an user with an email that already exists', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const createUser = new CreateUser(usersRepository)

    await createUser.execute({
      name: 'John',
      email: 'john@example.com',
      password: '123456',
    })

    expect(
      createUser.execute({
        name: 'John 2',
        email: 'john@example.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(Error)
  })
})
