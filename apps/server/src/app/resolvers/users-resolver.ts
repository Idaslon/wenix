import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { CreateUserInput } from '../dtos/inputs/create-user-input'
import { UserModel } from '../dtos/models/user-model'

@Resolver(() => UserModel)
export class UsersResolver {
  @Query(() => [UserModel])
  async users() {
    const other = new UserModel()
    other.name = 'other'
    other.email = 'other'

    return [
      {
        name: 'test',
        email: 'test@gmail.com',
      },
      other,
    ]
  }

  @Mutation(() => UserModel)
  async createUser(@Arg('data') data: CreateUserInput) {
    const { name, email } = data

    const user: UserModel = {
      name,
      email,
    }

    return user
  }
}
