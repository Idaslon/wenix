import prisma from '../../../prisma'

export class FindManyUsersUseCase {
  async execute() {
    const users = prisma.user.findMany()
    return users
  }
}
