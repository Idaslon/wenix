import { beforeEach, describe, expect, it } from 'vitest'
import prisma from '../../../prisma'
import { CreateUserUseCase } from '../user'
import { CreatePostUseCase } from '../post'
import { UsersPrismaRepository } from '../../repositories/implementations/users-prisma-repository'

describe('Create Post', () => {
  beforeEach(async () => {
    await prisma.post.deleteMany()
    await prisma.user.deleteMany()
  })

  it('should be able to create a post', async () => {
    const usersRepository = new UsersPrismaRepository()

    const createUser = new CreateUserUseCase(usersRepository)
    const createPost = new CreatePostUseCase()

    const user = await createUser.execute({
      name: 'John',
      email: 'john@example.com',
      password: '123456',
    })

    const post = await createPost.execute({
      title: 'IsComing',
      description: 'Is Coming...',
      authorId: user.id,
    })

    expect(post.title).toBe('IsComing')
    expect(post.description).toBe('Is Coming...')
    expect(post.authorId).toBe(user.id)
  })

  it('should not be able to create a post with authorId that not exists', async () => {
    const createPost = new CreatePostUseCase()

    expect(
      createPost.execute({
        title: 'IsComing',
        description: 'Is Coming...',
        authorId: 1,
      })
    ).rejects.toThrow('Author not found')
  })
})
