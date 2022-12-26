import { IncomingHttpHeaders } from 'http'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import prisma from '../prisma'
import { serverConfig } from '../config/server'
import { JWTAuthService } from '../app/services/implementation/jwt-auth-service'
import type { ServerContext } from './types'

function getTokenFromHeaders(headers: IncomingHttpHeaders) {
  const authorization = headers.authorization || ''
  const [_, token] = authorization.split(' ')

  return token
}

async function getUserBasedOnToken(token: string) {
  try {
    const authService = new JWTAuthService()

    const { email } = authService.validateToken(token)

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  } catch (error) {
    return null
  }
}

export async function startServer(server: ApolloServer<ServerContext>) {
  return startStandaloneServer(server, {
    listen: { port: serverConfig.port },
    context: async ({ req }) => {
      const token = getTokenFromHeaders(req.headers)
      const user = await getUserBasedOnToken(token)

      return {
        user,
        loggedIn: user !== null,
      }
    },
  })
}
