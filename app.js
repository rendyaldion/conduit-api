const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// include routes
const auth = require('./src/routes/auth.routes')
const user = require('./src/routes/user.routes')

const port = 3000

// body parser
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('API status: running')
})

// register endpoints
app.use('/api/users', auth)
app.use('/api/user', user)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})