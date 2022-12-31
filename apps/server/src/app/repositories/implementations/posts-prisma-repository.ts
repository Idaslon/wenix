import prisma from '../../../prisma'
import {
  Post,
  PostCreateProps,
  PostDeleteProps,
  PostFindManyProps,
  PostFindUniqueProps,
  PostsRepository,
  PostUpdateProps,
} from '../posts-repository'

export class PostsPrismaRepository implements PostsRepository {
  create(data: PostCreateProps): Promise<Post> {
    return prisma.post.create({
      data,
    })
  }

  findUnique(props: PostFindUniqueProps): Promise<Post | null> {
    return prisma.post.findUnique(props)
  }

  findMany(props?: PostFindManyProps): Promise<Post[]> {
    return prisma.post.findMany(props)
  }

  update(props: PostUpdateProps): Promise<Post> {
    return prisma.post.update(props)
  }

  delete(props: PostDeleteProps): Promise<Post> {
    return prisma.post.delete(props)
  }
}
