import path from 'node:path'

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { buildSchema } from 'type-graphql'

import { serverConfig } from './config/server'
import { UsersResolver } from './app/resolvers/users-resolver'
import { AuthResolver } from './app/resolvers/auth-resolver'

export async function startServer() {
  const schema = await buildSchema({
    resolvers: [UsersResolver, AuthResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),

    // Take a look on this: https://github.com/MichalLytek/type-graphql/issues/1397
    validate: {
      forbidUnknownValues: false,
    },
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: serverConfig.port },
  })

  console.log(`🚀  Server ready at: ${url}`)
}
