import { Arg, Mutation, Resolver } from 'type-graphql'

import { JWTAuthService } from '../../services/implementation/jwt-auth-service'
import { CreateUserUseCase } from '../../use-cases/user'
import { LoginUseCase } from '../../use-cases/auth'
import { LoginInput, RegisterInput } from '../dtos/auth/auth-inputs'
import { LoginModel } from '../dtos/auth/auth-models'
import { UserModel } from '../dtos/users/users-models'
import { UsersPrismaRepository } from '../../repositories/implementations/users-prisma-repository'

@Resolver()
export class AuthResolver {
  @Mutation(() => LoginModel)
  async login(@Arg('data') data: LoginInput) {
    const { email, password } = data

    const usersRepository = new UsersPrismaRepository()
    const authService = new JWTAuthService()

    const login = new LoginUseCase(usersRepository, authService)

    const { user, token } = await login.execute({
      email,
      password,
    })

    return {
      user,
      token,
    }
  }

  @Mutation(() => UserModel)
  async register(@Arg('data') data: RegisterInput) {
    const { name, email, password } = data

    const usersRepository = new UsersPrismaRepository()
    const createUser = new CreateUserUseCase(usersRepository)

    const user = await createUser.execute({
      name,
      email,
      password,
    })

    return user
  }
}
