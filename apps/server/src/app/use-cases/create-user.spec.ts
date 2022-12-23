import { beforeEach, describe, expect, it } from 'vitest'
import prisma from '../../prisma'
import { CreateUser } from './create-user'

describe('Create User', async () => {
  beforeEach(async () => {
    await prisma.user.deleteMany({})
  })

  it('should be able to create an user', () => {
    const createUser = new CreateUser()

    expect(
      createUser.execute({
        name: 'John',
        email: 'john@example.com',
        password: '123456',
      })
    ).resolves
  })

  it('should not be able to create an user with an email that already exists', async () => {
    const createUser = new CreateUser()

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
