export interface EncryptionService {
  hashPassword(password: string): Promise<string>
  comparePassword(plainPassword: string, encryptedPassword: string): Promise<boolean>
}
