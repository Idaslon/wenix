import path from 'node:path'

import { ApolloServer } from '@apollo/server'
import { buildSchema } from 'type-graphql'

import { UsersResolver } from '../app/resolvers/users-resolver'
import { AuthResolver } from '../app/resolvers/auth-resolver'
import type { ServerContext } from './types'

const schemaPath = path.resolve(__dirname, '..', 'schema.gql')

export async function createServer() {
  const schema = await buildSchema({
    resolvers: [UsersResolver, AuthResolver],
    emitSchemaFile: schemaPath,

    // Take a look on this: https://github.com/MichalLytek/type-graphql/issues/1397
    validate: {
      forbidUnknownValues: false,
    },
  })

  const server = new ApolloServer<ServerContext>({
    schema,
  })

  return server
}
