import { Post, validateCreatePost } from '@wenix/models'
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
