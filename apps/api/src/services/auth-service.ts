export interface AuthPayload {
  email: string
}

export interface AuthService {
  generateToken(payload: AuthPayload): string
  validateToken(token: string): AuthPayload
}
