import { User, validateCreateUser } from '@wenix/models'
import prisma from '../../prisma'
import { EncryptionService } from '../services/encryption-service'
import { BaseEncryptionService } from '../services/implementation/base-encryption-service'

interface CreateUserRequest {
  name: string
  email: string
  password: string
}

type CreateUserResponse = User

export class CreateUserUseCase {
  private encryptionService: EncryptionService

  constructor(encryptionService?: EncryptionService) {
    this.encryptionService = encryptionService || new BaseEncryptionService()
  }

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, email, password } = request

    validateCreateUser({
      name,
      email,
      password,
    })

    const userExists = await prisma.user.findUnique({
      where: { email },
    })

    if (userExists !== null) {
      throw new Error('An user with this email already exists')
    }

    const encryptedPassword = await this.encryptionService.hashPassword(password)

    const createUserProps = validateCreateUser({
      name,
      email,
      password: encryptedPassword,
    })

    const user = await prisma.user.create({
      data: createUserProps,
    })

    return user
  }
}
