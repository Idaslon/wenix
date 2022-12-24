import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import prisma from '../../prisma'
import { CreateUserInput } from '../dtos/inputs/create-user-input'
import { UserModel } from '../dtos/models/user-model'

@Resolver(() => UserModel)
export class UsersResolver {
  @Query(() => [UserModel])
  async users() {
    const users = await prisma.user.findMany()
    return users
  }

  // @Mutation(() => UserModel)
  // async createUser(@Arg('data') data: CreateUserInput) {
  //   const { name, email, password } = data
  //   const createUser = new CreateUser()

  //   const user = await createUser.execute({
  //     name,
  //     email,
  //     password,
  //   })

  //   return user
  // }
}
