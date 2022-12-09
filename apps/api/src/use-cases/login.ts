import { User } from "../entities/user"
import { UsersRepository } from "../repositories/users-repository"
import { AuthService } from "../services/auth-service"

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  user: User
  token: string
}

export class Login {
  constructor(
    private usersRepository: UsersRepository,
    private authService: AuthService
  ){}

  async execute(request: LoginRequest): Promise<LoginResponse> {
    const { email, password } = request

    const user = await this.usersRepository.findUserByEmail(email)

    if (user === null) {
      throw new Error('User not found')
    }

    const isPasswordCorrect = user.validatePassword(password)

    if (!isPasswordCorrect) {
      throw new Error('Passwords does not match')
    }

    const token = this.authService.generateToken({ email: user.email })

    return {
      user,
      token
    }
  }
}
