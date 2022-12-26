import './environment'
import 'reflect-metadata'
import { createServer, startServer } from './server'

async function main() {
  const server = await createServer()
  const { url } = await startServer(server)

  console.log(`🚀  Server ready at: ${url}`)
}

main()
