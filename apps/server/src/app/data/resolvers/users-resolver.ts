import { Query, Resolver } from 'type-graphql'
import { FindManyUsersUseCase } from '../../use-cases/user'
import { UserModel } from '../dtos/users/users-models'

@Resolver(() => UserModel)
export class UsersResolver {
  @Query(() => [UserModel])
  async users() {
    const findManyUsers = new FindManyUsersUseCase()

    const users = await findManyUsers.execute()
    return users
  }
}
