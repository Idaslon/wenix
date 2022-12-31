import { Query, Resolver } from 'type-graphql'
import { UsersPrismaRepository } from '../../repositories/implementations/users-prisma-repository'
import { UserModel } from '../dtos/users/users-models'

@Resolver(() => UserModel)
export class UsersResolver {
  @Query(() => [UserModel])
  async users() {
    const usersRepository = new UsersPrismaRepository()

    const users = await usersRepository.findMany()
    return users
  }
}
