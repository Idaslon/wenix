import { validateCreatePost } from '@wenix/validations'
import { AppError } from '../../error/app-error'
import { Post, PostsRepository } from '../../repositories/posts-repository'
import { UsersRepository } from '../../repositories/users-repository'

interface CreatePostRequest {
  title: string
  description: string
  authorId: number
}

type CreatePostResponse = Post

export class CreatePostUseCase {
  constructor(private postsRepository: PostsRepository, private usersRepository: UsersRepository) {}

  async execute(request: CreatePostRequest): Promise<CreatePostResponse> {
    const { title, description, authorId } = request

    validateCreatePost({
      title,
      description,
      authorId,
    })

    const userExists = await this.usersRepository.findUnique({
      where: { id: authorId },
    })

    if (userExists === null) {
      throw new AppError({ slug: 'auth-not-found' })
    }

    const post = await this.postsRepository.create({
      title,
      description,
      authorId,
    })

    return post
  }
}
