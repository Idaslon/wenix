import { Post } from '@prisma/client'
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import prisma from '../../../prisma'
import { CreatePostUseCase } from '../../use-cases/post'
import { CreatePostInput } from '../dtos/posts/posts-inputs'
import { PostModel } from '../dtos/posts/posts-models'

@Resolver(() => PostModel)
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

  @FieldResolver()
  async author(@Root() post: Post) {
    const author = await prisma.user.findUnique({
      where: {
        id: post.authorId,
      },
    })

    return author
  }
}
