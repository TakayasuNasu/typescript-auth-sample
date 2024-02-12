import express from 'express'
const app: express.Express = express()
const port = 33333
app.get('/', (_, res) => {
  res.send('The World!!! by Dio')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
