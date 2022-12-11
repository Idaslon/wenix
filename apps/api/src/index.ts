import './environment'
import { serverConfig } from './config/server'

async function main() {
  console.log('Server will run on:', serverConfig.port)
}

main()
