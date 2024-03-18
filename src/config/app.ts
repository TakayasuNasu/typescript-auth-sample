import * as dotenv from 'dotenv'

dotenv.config()

export const app = {
  port: process.env.PORT ?? 44444,
}
