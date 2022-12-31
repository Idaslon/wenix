import { Prisma } from '@prisma/client'
import prisma from '../../../prisma'

export class FindUniqueUserUseCase {
  async execute(args: Prisma.UserWhereUniqueInput) {
    const user = await prisma.user.findUnique({
      where: args,
    })

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }
}
