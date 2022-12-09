export interface AuthService {
  generateToken(payload: any): string
  validateToken(token: string): string
}
