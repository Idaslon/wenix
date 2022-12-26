import { Arg, Mutation, Resolver } from 'type-graphql'
import { LoginInput, RegisterInput } from '../dtos/inputs/auth-input'
import { LoginModel } from '../dtos/models/auth-model'
import { UserModel } from '../dtos/models/user-model'
import { JWTAuthService } from '../services/implementation/jwt-auth-service'
import { CreateUserUseCase } from '../use-cases/create-user'
import { LoginUseCase } from '../use-cases/login'

@Resolver()
export class AuthResolver {
  @Mutation(() => LoginModel)
  async login(@Arg('data') data: LoginInput) {
    const { email, password } = data

    const authService = new JWTAuthService()
    const login = new LoginUseCase(authService)

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

    const createUser = new CreateUserUseCase()

    const user = await createUser.execute({
      name,
      email,
      password,
    })

    return user
  }
}
