import bcrypt from 'bcrypt'

import { encryptionConfig } from '../../config/encryption'
import { EncryptionService } from '../encryption-service'

export class BaseEncryptionService implements EncryptionService {
  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, encryptionConfig.salt)
  }

  comparePassword(plainPassword: string, encryptedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, encryptedPassword)
  }
}
