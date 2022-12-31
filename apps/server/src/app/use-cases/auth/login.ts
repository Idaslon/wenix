import { User } from '@prisma/client'
import prisma from '../../../prisma'
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

  constructor(private authService: AuthService, encryptionService?: EncryptionService) {
    this.encryptionService = encryptionService || new BaseEncryptionService()
  }

  async execute(request: LoginRequest): Promise<LoginResponse> {
    const { email, password } = request

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (user === null) {
      throw new Error('User not found')
    }

    const isPasswordCorrect = await this.encryptionService.comparePassword(password, user.password)

    if (!isPasswordCorrect) {
      throw new Error('Passwords does not match')
    }

    const token = this.authService.generateToken({ email: user.email })

    return {
      user,
      token,
    }
  }
}
