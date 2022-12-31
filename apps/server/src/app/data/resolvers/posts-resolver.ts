import { Post } from '@prisma/client'
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { CreatePostUseCase, FindManyPostsUseCase } from '../../use-cases/post'
import { FindUniqueUserUseCase } from '../../use-cases/user'
import { CreatePostInput } from '../dtos/posts/posts-inputs'
import { PostModel } from '../dtos/posts/posts-models'

@Resolver(() => PostModel)
export class PostsResolver {
  @Query(() => [PostModel])
  async posts() {
    const findManyPosts = new FindManyPostsUseCase()

    const posts = await findManyPosts.execute()
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
    const findUniqueUser = new FindUniqueUserUseCase()

    const author = await findUniqueUser.execute({
      id: post.authorId,
    })

    return author
  }
}
