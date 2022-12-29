import { beforeEach, describe, expect, it } from 'vitest'
import prisma from '../../prisma'
import { CreateUserUseCase } from './create-user'
import { CreatePostUseCase } from './create-post'

describe('Create Post', async () => {
  beforeEach(async () => {
    await prisma.post.deleteMany({})
    await prisma.user.deleteMany({})
  })

  it('should be able to create a post', async () => {
    const createUser = new CreateUserUseCase()
    const createPost = new CreatePostUseCase()

    const user = await createUser.execute({
      name: 'John',
      email: 'john@example.com',
      password: '123456',
    })

    expect(
      createPost.execute({
        title: 'IsComing',
        description: 'Is Coming...',
        authorId: user.id,
      })
    ).resolves
  })

  it('should not be able to create a post without title', async () => {
    const createUser = new CreateUserUseCase()
    const createPost = new CreatePostUseCase()

    const user = await createUser.execute({
      name: 'John',
      email: 'john@example.com',
      password: '123456',
    })

    expect(
      createPost.execute({
        title: undefined as any,
        description: 'Is Coming...',
        authorId: user.id,
      })
    ).rejects.toThrow('An user with this email already exists')
  })
})
