import { User } from '@prisma/client'
import { AppError } from '../../error/app-error'
import { UsersRepository } from '../../repositories/users-repository'
import { AuthService } from '../../services/auth-service'
import { EncryptionService } from '../../services/encryption-service'
import { BaseEncryptionService } from '../../services/implementation/base-encryption-service'

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  user: User
  token: string
}

export class LoginUseCase {
  private encryptionService: EncryptionService

  constructor(
    private usersRepository: UsersRepository,
    private authService: AuthService,
    encryptionService?: EncryptionService
  ) {
    this.encryptionService = encryptionService || new BaseEncryptionService()
  }

  async execute(request: LoginRequest): Promise<LoginResponse> {
    const { email, password } = request

    const user = await this.usersRepository.findUnique({
      where: { email },
    })

    if (user === null) {
      throw new AppError({ slug: 'user-not-found' })
    }

    const isPasswordCorrect = await this.encryptionService.comparePassword(password, user.password)

    if (!isPasswordCorrect) {
      throw new AppError({ slug: 'password-mismatch' })
    }

    const token = this.authService.generateToken({ email: user.email })

    return {
      user,
      token,
    }
  }
}
