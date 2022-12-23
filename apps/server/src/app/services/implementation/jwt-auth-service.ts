import jwt from 'jsonwebtoken'
import { authConfig } from '../../../config/auth'
import { AuthPayload, AuthService } from '../auth-service'

export class JWTAuthService implements AuthService {
  generateToken(payload: AuthPayload): string {
    const token = jwt.sign(payload, authConfig.secret, { expiresIn: authConfig.expiresIn })

    return token
  }

  validateToken(token: string): AuthPayload {
    const tokenDecoded = jwt.verify(token, authConfig.secret)

    if (typeof tokenDecoded === 'string' || !tokenDecoded.email) {
      throw new Error('Invalid token')
    }

    return {
      email: tokenDecoded.email,
    }
  }
}
