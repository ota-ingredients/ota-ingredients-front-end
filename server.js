const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.use(require('body-parser').json())
    server.use(require('body-parser').urlencoded({ extended: true }))
    server.use(require('cookie-parser')())

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(process.env.PORT || 3000, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`)
    })
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
