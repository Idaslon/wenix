import { sign, verify } from 'jsonwebtoken';
import { authConfig } from '../config/auth';
import { AuthService } from './auth-service';

export class JWTAuthService implements AuthService {
  generateToken(payload: any): string {
    console.log(authConfig);

    const token = sign(
      payload,
      authConfig.secret,
      { expiresIn: authConfig.expiresIn }
    )

    return token
  }

  validateToken(token: string): string {
    const tokenDecoded = verify(token, authConfig.secret)
    return tokenDecoded as any
  }

}
