import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { PostsPrismaRepository } from '../../repositories/implementations/posts-prisma-repository'
import { UsersPrismaRepository } from '../../repositories/implementations/users-prisma-repository'
import { Post } from '../../repositories/posts-repository'
import { CreatePostUseCase } from '../../use-cases/post'
import { CreatePostInput } from '../dtos/posts/posts-inputs'
import { PostModel } from '../dtos/posts/posts-models'

@Resolver(() => PostModel)
export class PostsResolver {
  @Query(() => [PostModel])
  async posts() {
    const postsRepository = new PostsPrismaRepository()

    const posts = await postsRepository.findMany()
    return posts
  }

  @Mutation(() => PostModel)
  async post(@Arg('data') data: CreatePostInput) {
    const { title, description, authorId } = data

    const postsRepository = new PostsPrismaRepository()
    const usersRepository = new UsersPrismaRepository()

    const createPost = new CreatePostUseCase(postsRepository, usersRepository)

    const post = await createPost.execute({
      title,
      description,
      authorId,
    })

    return post
  }

  @FieldResolver()
  async author(@Root() post: Post) {
    const usersRepository = new UsersPrismaRepository()

    const author = await usersRepository.findUnique({
      where: {
        id: post.authorId,
      },
    })

    return author
  }
}
