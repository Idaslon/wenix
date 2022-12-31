import { beforeEach, describe, expect, it } from 'vitest'
import prisma from '../../../prisma'
import { CreateUserUseCase } from './create-user'
import { UsersPrismaRepository } from '../../repositories/implementations/users-prisma-repository'

describe('Create User', () => {
  beforeEach(async () => {
    await prisma.post.deleteMany()
    await prisma.user.deleteMany()
  })

  it('should be able to create an user', async () => {
    const usersRepository = new UsersPrismaRepository()
    const createUser = new CreateUserUseCase(usersRepository)

    const user = await createUser.execute({
      name: 'John',
      email: 'john@example.com',
      password: '123456',
    })

    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('password')

    expect(user.name).toBe('John')
    expect(user.email).toBe('john@example.com')
  })

  it('should not be able to create an user with an email that already exists', async () => {
    const usersRepository = new UsersPrismaRepository()
    const createUser = new CreateUserUseCase(usersRepository)

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
    ).rejects.toThrow('An user with this email already exists')
  })
})
