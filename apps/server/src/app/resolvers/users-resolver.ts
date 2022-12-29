import { Query, Resolver } from 'type-graphql'
import prisma from '../../prisma'
import { UserModel } from '../dtos/models/user-model'

@Resolver(() => UserModel)
export class UsersResolver {
  @Query(() => [UserModel])
  async users() {
    const users = await prisma.user.findMany()
    return users
  }
}
