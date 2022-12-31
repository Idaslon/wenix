import { Post } from '@prisma/client'
import { validateCreatePost } from '@wenix/validations'
import prisma from '../../prisma'

interface CreatePostRequest {
  title: string
  description: string
  authorId: number
}

type CreatePostResponse = Post

export class CreatePostUseCase {
  async execute(request: CreatePostRequest): Promise<CreatePostResponse> {
    const { title, description, authorId } = request

    validateCreatePost({
      title,
      description,
      authorId,
    })

    const userExists = await prisma.user.findUnique({
      where: { id: authorId },
    })

    if (userExists === null) {
      throw new Error('Author not found')
    }

    const post = await prisma.post.create({
      data: {
        title,
        description,
        authorId,
      },
    })

    return post
  }
}
