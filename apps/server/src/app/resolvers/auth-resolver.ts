import { Arg, Mutation, Resolver } from 'type-graphql'
import { LoginInput } from '../dtos/inputs/auth-input'
import { LoginModel } from '../dtos/models/auth-model'
import { JWTAuthService } from '../services/implementation/jwt-auth-service'
import { Login } from '../use-cases/login'

@Resolver()
export class AuthResolver {
  @Mutation(() => LoginModel)
  async login(@Arg('data') data: LoginInput) {
    const { email, password } = data

    const authService = new JWTAuthService()
    const login = new Login(authService)

    const { user, token } = await login.execute({
      email,
      password,
    })

    return {
      user,
      token,
    }
  }
}
