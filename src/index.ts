import express from 'express'

import cookieParser from 'cookie-parser'

import { app as config } from '@/config/app'
import studentRouter from '@/routes/student'

const app: express.Express = express()
const port = config.port

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/', (_, res) => {
  res.json('Server running.')
})

app.use('/student', studentRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
