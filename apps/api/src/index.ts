import dotenv from 'dotenv'
import { serverConfig } from './config/server'

dotenv.config()

async function main() {
  console.log('Server will run on:', serverConfig.port)
}

main()
