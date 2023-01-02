import { validateCreateUser } from '@wenix/validations'
import { AppError } from '../../error/app-error'
import { User, UsersRepository } from '../../repositories/users-repository'
import { EncryptionService } from '../../services/encryption-service'
import { BaseEncryptionService } from '../../services/implementation/base-encryption-service'

interface CreateUserRequest {
  name: string
  email: string
  password: string
}

type CreateUserResponse = User

export class CreateUserUseCase {
  private encryptionService: EncryptionService

  constructor(private usersRepository: UsersRepository, encryptionService?: EncryptionService) {
    this.encryptionService = encryptionService || new BaseEncryptionService()
  }

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, email, password } = request

    validateCreateUser({
      name,
      email,
      password,
    })

    const userExists = await this.usersRepository.findUnique({
      where: { email },
    })

    if (userExists !== null) {
      throw new AppError({ slug: 'email-taken' })
    }

    const encryptedPassword = await this.encryptionService.hashPassword(password)

    const user = await this.usersRepository.create({
      name,
      email,
      password: encryptedPassword,
    })

    return user
  }
}
