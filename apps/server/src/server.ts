import path from 'node:path'

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { buildSchema } from 'type-graphql'

import { serverConfig } from './config/server'
import { UsersResolver } from './app/resolvers/users-resolver'

export async function startServer() {
  const schema = await buildSchema({
    resolvers: [UsersResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: serverConfig.port },
  })

  console.log(`🚀  Server ready at: ${url}`)
}
