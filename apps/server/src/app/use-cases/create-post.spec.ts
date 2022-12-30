import { beforeEach, describe, expect, it } from 'vitest'
import prisma from '../../prisma'
import { CreateUserUseCase } from './create-user'
import { CreatePostUseCase } from './create-post'

describe('Create Post', () => {
  beforeEach(async () => {
    await prisma.post.deleteMany()
    await prisma.user.deleteMany()
  })

  it('should be able to create a post', async () => {
    const createUser = new CreateUserUseCase()
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
})
