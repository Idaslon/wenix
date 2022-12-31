import { Prisma, Post as PrismaPost } from '@prisma/client'

export type Post = PrismaPost

export type PostCreateProps = Omit<Prisma.PostUncheckedCreateInput, 'id'>
export type PostFindUniqueProps = Prisma.PostFindUniqueArgs
export type PostFindManyProps = Prisma.PostFindManyArgs
export type PostUpdateProps = Prisma.PostUpdateArgs
export type PostDeleteProps = Prisma.PostDeleteArgs

export interface PostsRepository {
  create(data: PostCreateProps): Promise<Post>
  findUnique(props: PostFindUniqueProps): Promise<Post | null>
  findMany(props?: PostFindManyProps): Promise<Post[]>
  update(props: PostFindManyProps): Promise<Post>
  delete(props: PostFindManyProps): Promise<Post>
}
