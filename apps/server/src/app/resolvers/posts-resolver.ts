import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import prisma from '../../prisma'
import { CreatePostInput } from '../dtos/inputs/post-input'
import { PostModel } from '../dtos/models/post-model'
import { CreatePostUseCase } from '../use-cases/create-post'

@Resolver()
export class PostsResolver {
  @Query(() => [PostModel])
  async posts() {
    const posts = await prisma.post.findMany()
    return posts
  }

  @Mutation(() => PostModel)
  async post(@Arg('data') data: CreatePostInput) {
    const { title, description, authorId } = data

    const createPost = new CreatePostUseCase()

    const post = await createPost.execute({
      title,
      description,
      authorId,
    })

    return post
  }
}
