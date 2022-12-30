import path from 'node:path'

import { ApolloServer } from '@apollo/server'
import { buildSchema } from 'type-graphql'

import type { ServerContext } from './types'

import { UsersResolver } from '../app/data/resolvers/users-resolver'
import { AuthResolver } from '../app/data/resolvers/auth-resolver'
import { PostsResolver } from '../app/data/resolvers/posts-resolver'

const schemaPath = path.resolve(__dirname, '..', 'schema.gql')

export async function createServer() {
  const schema = await buildSchema({
    resolvers: [UsersResolver, AuthResolver, PostsResolver],
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
