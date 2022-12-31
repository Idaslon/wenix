import prisma from '../../../prisma'

export class FindManyPostsUseCase {
  async execute() {
    const posts = await prisma.post.findMany()
    return posts
  }
}
