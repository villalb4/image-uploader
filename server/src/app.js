const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => res.json({api:'http://localhost:3001/api'}))

module.exports = app